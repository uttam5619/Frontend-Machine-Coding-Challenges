import StepOne from "../components/StepOne"
import StepTwo from "../components/StepTwo"
import StepThree from "../components/StepThree"

export const steps=[
    {
        formStep:StepOne
    },
    {
        formStep:StepTwo
    },
    {
        formStep:StepThree
    }
]



export const userObject ={
    userDetails:{
        name:'',
        email:'',
        phone:'',
    },
    shippingDetails:{
        lane:'',
        city:'',
        state:'',
        country:'',
        pin:'',
    },
    paymentDetails:{
        paymentMethod:'',
        paymentAmount:'',
        cardNumber:'',
        cardHolderName:'',
        upiId:''
    }
    
}



export const locationData = [
    {
      id: 1,
      country: "India",
      states: [
        {
          id: 1,
          state: "Uttar Pradesh",
          cities: [
            "Lucknow",
            "Noida",
            "Ghaziabad",
            "Kanpur",
            "Agra",
            "Varanasi"
          ]
        },
        {
          id: 2,
          state: "Maharashtra",
          cities: [
            "Mumbai",
            "Pune",
            "Nagpur",
            "Nashik",
            "Thane"
          ]
        },
        {
          id: 3,
          state: "Karnataka",
          cities: [
            "Bengaluru",
            "Mysuru",
            "Hubballi",
            "Mangaluru"
          ]
        },
        {
          id: 4,
          state: "Tamil Nadu",
          cities: [
            "Chennai",
            "Coimbatore",
            "Madurai",
            "Salem",
            "Tiruchirappalli"
          ]
        }
      ]
    },
    {
      id: 2,
      country: "United States",
      states: [
        {
          id: 1,
          state: "California",
          cities: [
            "Los Angeles",
            "San Francisco",
            "San Diego",
            "Sacramento"
          ]
        },
        {
          id: 2,
          state: "Texas",
          cities: [
            "Houston",
            "Dallas",
            "Austin",
            "San Antonio"
          ]
        },
        {
          id: 3,
          state: "New York",
          cities: [
            "New York City",
            "Buffalo",
            "Rochester",
            "Albany"
          ]
        }
      ]
    },
    {
      id: 3,
      country: "Canada",
      states: [
        {
          id: 1,
          state: "Ontario",
          cities: [
            "Toronto",
            "Ottawa",
            "Hamilton",
            "London"
          ]
        },
        {
          id: 2,
          state: "British Columbia",
          cities: [
            "Vancouver",
            "Victoria",
            "Kelowna",
            "Surrey"
          ]
        },
        {
          id: 3,
          state: "Alberta",
          cities: [
            "Calgary",
            "Edmonton",
            "Red Deer",
            "Lethbridge"
          ]
        }
      ]
    },
    {
      id: 4,
      country: "Australia",
      states: [
        {
          id: 1,
          state: "New South Wales",
          cities: [
            "Sydney",
            "Newcastle",
            "Wollongong",
            "Albury"
          ]
        },
        {
          id: 2,
          state: "Victoria",
          cities: [
            "Melbourne",
            "Geelong",
            "Ballarat",
            "Bendigo"
          ]
        },
        {
          id: 3,
          state: "Queensland",
          cities: [
            "Brisbane",
            "Gold Coast",
            "Cairns",
            "Townsville"
          ]
        }
      ]
    },
    {
      id: 5,
      country: "Japan",
      states: [
        {
          id: 1,
          state: "Tokyo",
          cities: [
            "Shinjuku",
            "Shibuya",
            "Ginza",
            "Akihabara"
          ]
        },
        {
          id: 2,
          state: "Osaka",
          cities: [
            "Osaka",
            "Sakai",
            "Higashiosaka",
            "Takatsuki"
          ]
        },
        {
          id: 3,
          state: "Hokkaido",
          cities: [
            "Sapporo",
            "Hakodate",
            "Asahikawa",
            "Otaru"
          ]
        }
      ]
    }
]
  