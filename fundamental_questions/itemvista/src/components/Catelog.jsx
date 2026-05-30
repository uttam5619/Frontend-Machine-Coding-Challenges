import React, { useState, useEffect, useCallback } from 'react';
import ProductCard from './ProductCard';
import loadData from '../hooks/useLoadData';

const THRESHOLD = 30;
const LIMIT = 15;

const Catelog = () => {
    const [productData, setProductData] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);

    // ==================== INITIAL LOAD ====================
    useEffect(() => {
        const fetchInitial = async () => {
            setLoading(true);
            const data = await loadData(LIMIT, 0);   // offset = 0 for first page
            setProductData(data);
            setLoading(false);
            if (data.length < LIMIT) setHasMore(false);
        };

        fetchInitial();
    }, []);   // Empty dependency → runs only once

    // ==================== LOAD MORE ====================
    useEffect(() => {
        if (page === 1) return;   // Skip initial page

        const fetchMore = async () => {
            setLoading(true);
            const offset = (page - 1) * LIMIT;
            const newData = await loadData(LIMIT, offset);

            if (newData.length > 0) {
                setProductData(prev => [...prev, ...newData]);
                if (newData.length < LIMIT) {
                    setHasMore(false);
                }
            } else {
                setHasMore(false);
            }
            setLoading(false);
        };

        fetchMore();
    }, [page]);

    // ==================== SCROLL HANDLER ====================
    const handleScroll = useCallback(() => {
        if (loading || !hasMore) return;

        const remainingHeight =
            document.documentElement.scrollHeight -
            (window.innerHeight + window.scrollY);

        if (remainingHeight <= THRESHOLD) {
            setPage(prev => prev + 1);
        }
    }, [loading, hasMore]);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [handleScroll]);

    return (
        <div className="catelogContainer">
            <div className="productContainer">
                {productData.map((item) => (
                    <ProductCard
                        key={item.id}
                        name={item.title}
                        description={item.description}
                        image={item.images || item.thumbnail}
                    />
                ))}
            </div>

            {loading && (
                <div style={{ textAlign: 'center', padding: '30px', fontSize: '18px' }}>
                    Loading more products...
                </div>
            )}

            {!hasMore && productData.length > 0 && (
                <div style={{ textAlign: 'center', padding: '20px', color: '#666' }}>
                    You've reached the end
                </div>
            )}
        </div>
    );
};

export default Catelog