import appointment_img from "./appointment_img.png";
import header_img from "./header_img.png";
import group_profiles from "./group_profiles.png";
import profile_pic from "./profile_pic.png";
import contact_image from "./contact_image.png";
import about_image from "./about_image.png";
import logo from "./logo.svg";
import dropdown_icon from "./dropdown_icon.svg";
import menu_icon from "./menu_icon.svg";
import cross_icon from "./cross_icon.png";
import chats_icon from "./chats_icon.svg";
import verified_icon from "./verified_icon.svg";
import arrow_icon from "./arrow_icon.svg";
import info_icon from "./info_icon.svg";
import upload_icon from "./upload_icon.png";
import stripe_logo from "./stripe_logo.png";
import razorpay_logo from "./razorpay_logo.png";
import doc1 from "./doc1.png";
import doc2 from "./doc2.png";
import doc3 from "./doc3.png";
import doc4 from "./doc4.png";
import doc5 from "./doc5.png";
import doc6 from "./doc6.png";
import doc7 from "./doc7.png";
import doc8 from "./doc8.png";
import doc9 from "./doc9.png";
import doc10 from "./doc10.png";
import doc11 from "./doc11.png";
import doc12 from "./doc12.png";
import doc13 from "./doc13.png";
import doc14 from "./doc14.png";
import doc15 from "./doc15.png";
import Dermatologist from "./Dermatologist.svg";
import Gastroenterologist from "./Gastroenterologist.svg";
import General_physician from "./General_physician.svg";
import Gynecologist from "./Gynecologist.svg";
import Neurologist from "./Neurologist.svg";
import Pediatricians from "./Pediatricians.svg";

export const assets = {
  appointment_img,
  header_img,
  group_profiles,
  logo,
  chats_icon,
  verified_icon,
  info_icon,
  profile_pic,
  arrow_icon,
  contact_image,
  about_image,
  menu_icon,
  cross_icon,
  dropdown_icon,
  upload_icon,
  stripe_logo,
  razorpay_logo,
};

export const specialityData = [
  {
    speciality: "General physician",
    image: General_physician,
  },
  {
    speciality: "Gynecologist",
    image: Gynecologist,
  },
  {
    speciality: "Dermatologist",
    image: Dermatologist,
  },
  {
    speciality: "Pediatricians",
    image: Pediatricians,
  },
  {
    speciality: "Neurologist",
    image: Neurologist,
  },
  {
    speciality: "Gastroenterologist",
    image: Gastroenterologist,
  },
];

// export const doctors = [
//     {
//         _id: 'doc1',
//         name: 'Dr. Richard James',
//         image: doc1,
//         speciality: 'General physician',
//         degree: 'MBBS',
//         experience: '4 Years',
//         about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
//         fees: 50,
//         address: {
//             line1: '17th Cross, Richmond',
//             line2: 'Circle, Ring Road, London'
//         }
//     },
//     {
//         _id: 'doc2',
//         name: 'Dr. Emily Larson',
//         image: doc2,
//         speciality: 'Gynecologist',
//         degree: 'MBBS',
//         experience: '3 Years',
//         about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
//         fees: 60,
//         address: {
//             line1: '27th Cross, Richmond',
//             line2: 'Circle, Ring Road, London'
//         }
//     },
//     {
//         _id: 'doc3',
//         name: 'Dr. Sarah Patel',
//         image: doc3,
//         speciality: 'Dermatologist',
//         degree: 'MBBS',
//         experience: '1 Years',
//         about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
//         fees: 30,
//         address: {
//             line1: '37th Cross, Richmond',
//             line2: 'Circle, Ring Road, London'
//         }
//     },
//     {
//         _id: 'doc4',
//         name: 'Dr. Christopher Lee',
//         image: doc4,
//         speciality: 'Pediatricians',
//         degree: 'MBBS',
//         experience: '2 Years',
//         about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
//         fees: 40,
//         address: {
//             line1: '47th Cross, Richmond',
//             line2: 'Circle, Ring Road, London'
//         }
//     },
//     {
//         _id: 'doc5',
//         name: 'Dr. Jennifer Garcia',
//         image: doc5,
//         speciality: 'Neurologist',
//         degree: 'MBBS',
//         experience: '4 Years',
//         about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
//         fees: 50,
//         address: {
//             line1: '57th Cross, Richmond',
//             line2: 'Circle, Ring Road, London'
//         }
//     },
//     {
//         _id: 'doc6',
//         name: 'Dr. Andrew Williams',
//         image: doc6,
//         speciality: 'Neurologist',
//         degree: 'MBBS',
//         experience: '4 Years',
//         about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
//         fees: 50,
//         address: {
//             line1: '57th Cross, Richmond',
//             line2: 'Circle, Ring Road, London'
//         }
//     },
//     {
//         _id: 'doc7',
//         name: 'Dr. Christopher Davis',
//         image: doc7,
//         speciality: 'General physician',
//         degree: 'MBBS',
//         experience: '4 Years',
//         about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
//         fees: 50,
//         address: {
//             line1: '17th Cross, Richmond',
//             line2: 'Circle, Ring Road, London'
//         }
//     },
//     {
//         _id: 'doc8',
//         name: 'Dr. Timothy White',
//         image: doc8,
//         speciality: 'Gynecologist',
//         degree: 'MBBS',
//         experience: '3 Years',
//         about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
//         fees: 60,
//         address: {
//             line1: '27th Cross, Richmond',
//             line2: 'Circle, Ring Road, London'
//         }
//     },
//     {
//         _id: 'doc9',
//         name: 'Dr. Ava Mitchell',
//         image: doc9,
//         speciality: 'Dermatologist',
//         degree: 'MBBS',
//         experience: '1 Years',
//         about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
//         fees: 30,
//         address: {
//             line1: '37th Cross, Richmond',
//             line2: 'Circle, Ring Road, London'
//         }
//     },
//     {
//         _id: 'doc10',
//         name: 'Dr. Jeffrey King',
//         image: doc10,
//         speciality: 'Pediatricians',
//         degree: 'MBBS',
//         experience: '2 Years',
//         about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
//         fees: 40,
//         address: {
//             line1: '47th Cross, Richmond',
//             line2: 'Circle, Ring Road, London'
//         }
//     },
//     {
//         _id: 'doc11',
//         name: 'Dr. Zoe Kelly',
//         image: doc11,
//         speciality: 'Neurologist',
//         degree: 'MBBS',
//         experience: '4 Years',
//         about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
//         fees: 50,
//         address: {
//             line1: '57th Cross, Richmond',
//             line2: 'Circle, Ring Road, London'
//         }
//     },
//     {
//         _id: 'doc12',
//         name: 'Dr. Patrick Harris',
//         image: doc12,
//         speciality: 'Gastroenterologist',
//         degree: 'MBBS',
//         experience: '4 Years',
//         about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
//         fees: 50,
//         address: {
//             line1: '57th Cross, Richmond',
//             line2: 'Circle, Ring Road, London'
//         }
//     },
//     {
//         _id: 'doc13',
//         name: 'Dr. Chloe Evans',
//         image: doc13,
//         speciality: 'General physician',
//         degree: 'MBBS',
//         experience: '4 Years',
//         about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
//         fees: 50,
//         address: {
//             line1: '17th Cross, Richmond',
//             line2: 'Circle, Ring Road, London'
//         }
//     },
//     {
//         _id: 'doc14',
//         name: 'Dr. Ryan Martinez',
//         image: doc14,
//         speciality: 'Gynecologist',
//         degree: 'MBBS',
//         experience: '3 Years',
//         about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
//         fees: 60,
//         address: {
//             line1: '27th Cross, Richmond',
//             line2: 'Circle, Ring Road, London'
//         }
//     },
//     {
//         _id: 'doc15',
//         name: 'Dr. Amelia Hill',
//         image: doc15,
//         speciality: 'Dermatologist',
//         degree: 'MBBS',
//         experience: '1 Years',
//         about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
//         fees: 30,
//         address: {
//             line1: '37th Cross, Richmond',
//             line2: 'Circle, Ring Road, London'
//         }
//     },
// ]
export const doctors = [
  {
    _id: "doc1",
    name: "Dr. Anil Mehta",
    image: doc1,
    speciality: "General physician",
    degree: "MBBS",
    experience: "4 Years",
    about:
      "Dr. Anil Mehta is a highly dedicated General Physician with over 4 years of experience in providing comprehensive medical care. His approach emphasizes preventive medicine and early intervention to ensure long-term health benefits for his patients. Dr. Anil believes in building lasting relationships with his patients and offers a personalized care plan tailored to each individual’s needs. He is known for his empathy, attention to detail, and patient-centered care, making him a trusted name in the medical community.",
    fees: 50,
    address: {
      line1: "17th Cross, Richmond",
      line2: "Circle, Ring Road, Delhi",
    },
  },
  {
    _id: "doc2",
    name: "Dr. Ayesha Khan",
    image: doc2,
    speciality: "Gynecologist",
    degree: "MBBS",
    experience: "3 Years",
    about:
      "Dr. Ayesha Khan is a skilled Gynecologist with expertise in women’s health and wellness. She focuses on both preventive care and advanced treatment techniques, making her a well-rounded healthcare provider. Dr. Ayesha is known for her compassionate approach, ensuring that her patients feel supported throughout their medical journeys. Her passion for empowering women through education about their health makes her an advocate for patient awareness. She provides expert care in maternity services, gynecological disorders, and reproductive health.",
    fees: 60,
    address: {
      line1: "27th Cross, Richmond",
      line2: "Circle, Ring Road, Mumbai",
    },
  },
  {
    _id: "doc3",
    name: "Dr. Abhishek Sharma",
    image: doc3,
    speciality: "Dermatologist",
    degree: "MBBS",
    experience: "1 Year",
    about:
      "Dr. Abhishek Sharma is a passionate Dermatologist specializing in skin care and treatment. With a strong focus on patient satisfaction, he offers treatments for a wide range of skin conditions and cosmetic concerns. He believes in taking a holistic approach to skin health, addressing both the physical and emotional aspects of his patients. Dr. Abhishek’s dedication to continuous learning and staying up-to-date with the latest techniques makes him a promising name in dermatology.",
    fees: 30,
    address: {
      line1: "37th Cross, Richmond",
      line2: "Circle, Ring Road, Bengaluru",
    },
  },
  {
    _id: "doc4",
    name: "Dr. Abdul Rahman",
    image: doc4,
    speciality: "Pediatrician",
    degree: "MBBS",
    experience: "2 Years",
    about:
      "Dr. Abdul Rahman is a Pediatrician focused on ensuring the well-being of children through preventive and curative care. He believes in creating a comfortable and friendly environment for young patients to ensure they receive the best care. His approach involves not only treating diseases but also helping children grow up healthy and strong through regular checkups and vaccinations. Parents trust him for his detailed attention and the way he addresses every concern with patience.",
    fees: 40,
    address: {
      line1: "47th Cross, Richmond",
      line2: "Circle, Ring Road, Hyderabad",
    },
  },
  {
    _id: "doc5",
    name: "Dr. Neha Kapoor",
    image: doc5,
    speciality: "Neurologist",
    degree: "MBBS",
    experience: "4 Years",
    about:
      "Dr. Neha Kapoor is a highly respected Neurologist with extensive experience in diagnosing and treating neurological disorders. Her deep understanding of the nervous system allows her to provide effective treatment for conditions such as migraines, epilepsy, and neurodegenerative diseases. Dr. Neha’s compassionate and patient-first approach ensures that her patients feel understood and supported throughout their treatment journey. Her dedication to improving the quality of life for her patients through personalized care sets her apart.",
    fees: 50,
    address: {
      line1: "57th Cross, Richmond",
      line2: "Circle, Ring Road, Chennai",
    },
  },
  {
    _id: "doc6",
    name: "Dr. Sameer Sheikh",
    image: doc6,
    speciality: "Neurologist",
    degree: "MBBS",
    experience: "4 Years",
    about:
      "Dr. Sameer Sheikh is a Neurologist who specializes in treating a wide range of neurological conditions. His patient-centered approach ensures that each patient receives personalized care and treatment plans tailored to their needs. Dr. Sameer is known for his expertise in addressing complex neurological conditions, as well as his ability to explain diagnoses and treatments in a way that patients can easily understand. His commitment to excellence has earned him the trust and respect of both his colleagues and patients.",
    fees: 50,
    address: {
      line1: "57th Cross, Richmond",
      line2: "Circle, Ring Road, Pune",
    },
  },

 
  {
    _id: "doc7",
    name: "Dr. Suresh Nair",
    image: doc7,
    speciality: "General physician",
    degree: "MBBS",
    experience: "4 Years",
    about:
      "Dr. Suresh Nair is a General Physician known for his patient-first approach and a commitment to improving general health outcomes. With over 4 years of experience, Dr. Suresh focuses on treating a wide variety of common ailments and chronic diseases. He emphasizes preventive healthcare, promoting a healthy lifestyle to prevent the onset of more serious conditions. His calm and approachable demeanor makes him a favorite among patients, who appreciate his thoroughness and ability to explain medical issues in an understandable way.",
    fees: 50,
    address: {
      line1: "17th Cross, Richmond",
      line2: "Circle, Ring Road, Kochi",
    },
  },

  {
    _id: "doc8",
    name: "Dr. Shubham Kumar",
    image: doc8,
    speciality: "Gynecologist",
    degree: "MBBS",
    experience: "3 Years",
    about:
      "Dr. Shubham Kumar is an experienced Gynecologist who provides comprehensive care for women’s health, with a focus on gynecological surgeries, pregnancy, and reproductive health. With 3 years of experience, Dr. Shubham’s expertise includes prenatal and postnatal care, as well as advanced treatments for gynecological conditions. His patient-centered approach ensures that women receive personalized care in a supportive and compassionate environment. Dr. Shubham is passionate about educating women about their health and ensuring their comfort at every stage of their treatment.",
    fees: 60,
    address: {
      line1: "27th Cross, Richmond",
      line2: "Circle, Ring Road, Pune",
    },
  },

  {
    _id: "doc9",
    name: "Dr. Kavita Patel",
    image: doc9,
    speciality: "Dermatologist",
    degree: "MBBS",
    experience: "1 Year",
    about:
      "Dr. Kavita Patel is a Dermatologist with a strong passion for treating skin conditions and improving her patients’ skin health. With expertise in cosmetic dermatology and medical skin treatments, Dr. Kavita offers personalized care for conditions like acne, eczema, and psoriasis. She uses the latest techniques to achieve the best outcomes, ensuring patient satisfaction and safety. Her warm approach, combined with her meticulous attention to detail, ensures that patients receive top-quality care tailored to their individual needs.",
    fees: 30,
    address: {
      line1: "37th Cross, Richmond",
      line2: "Circle, Ring Road, Ahmedabad",
    },
  },

  {
    _id: "doc10",
    name: "Dr. Arvind Kumar",
    image: doc10,
    speciality: "Pediatrician",
    degree: "MBBS",
    experience: "2 Years",
    about:
      "Dr. Arvind Kumar is a Pediatrician dedicated to providing excellent medical care for infants, children, and adolescents. His expertise in childhood diseases and preventive healthcare ensures that children grow up healthy and strong. Dr. Arvind is known for his ability to connect with children, creating a friendly and comfortable atmosphere for his young patients. His focus on early detection and intervention helps prevent future complications, making him a trusted pediatrician among parents.",
    fees: 40,
    address: {
      line1: "47th Cross, Richmond",
      line2: "Circle, Ring Road, Jaipur",
    },
  },

  {
    _id: "doc11",
    name: "Dr. Salma Qureshi",
    image: doc11,
    speciality: "Neurologist",
    degree: "MBBS",
    experience: "4 Years",
    about:
      "Dr. Salma Qureshi is a Neurologist who specializes in diagnosing and treating neurological disorders with a patient-focused approach. Her expertise covers a wide range of conditions, including headaches, seizures, and neurodegenerative diseases. Dr. Salma combines her clinical skills with empathy and care, ensuring that her patients understand their conditions and treatment plans. She is committed to improving her patients’ quality of life through compassionate care and advanced treatment techniques, earning her a reputation as a highly respected neurologist.",
    fees: 50,
    address: {
      line1: "57th Cross, Richmond",
      line2: "Circle, Ring Road, Lucknow",
    },
  },

  {
    _id: "doc12",
    name: "Dr. Rajesh Gupta",
    image: doc12,
    speciality: "Gastroenterologist",
    degree: "MBBS",
    experience: "4 Years",
    about:
      "Dr. Rajesh Gupta is a highly experienced Gastroenterologist with expertise in diagnosing and treating a wide range of digestive disorders. His knowledge spans across areas like liver diseases, irritable bowel syndrome, and acid reflux management. Dr. Rajesh uses the latest diagnostic tools to provide accurate diagnoses and effective treatments, ensuring that his patients recover swiftly and live healthier lives. He is known for his patient-friendly approach and his ability to explain complex conditions in simple terms.",
    fees: 50,
    address: {
      line1: "57th Cross, Richmond",
      line2: "Circle, Ring Road, Kolkata",
    },
  },

  {
    _id: "doc13",
    name: "Dr. Pooja Rao",
    image: doc13,
    speciality: "General physician",
    degree: "MBBS",
    experience: "4 Years",
    about:
      " Dr. Pooja Rao is a dedicated General Physician with a passion for providing holistic medical care. She has a strong focus on preventive healthcare, helping patients avoid potential health issues through early intervention. Dr. Pooja is adept at diagnosing and treating a wide variety of conditions, from common illnesses to chronic diseases. She believes in building strong patient-doctor relationships, ensuring her patients feel comfortable and informed throughout their healthcare journey. Her empathetic approach and comprehensive medical knowledge make her a reliable choice for general health care needs.",
    fees: 50,
    address: {
      line1: "17th Cross, Richmond",
      line2: "Circle, Ring Road, Varanasi",
    },
  },

  {
    _id: "doc14",
    name: "Dr. Alok Verma",
    image: doc14,
    speciality: "Gynecologist",
    degree: "MBBS",
    experience: "3 Years",
    about:
      "Dr. Alok Verma is a compassionate Gynecologist who specializes in women’s health, focusing on maternity care, gynecological surgeries, and reproductive health. With 3 years of experience, Dr. Alok provides patient-centered care tailored to each woman’s unique needs. His approach emphasizes preventive healthcare and patient education, empowering women to take charge of their health. Whether it’s routine check-ups or complex gynecological issues, Dr. Alok is committed to delivering the highest standard of care in a supportive and understanding environment.",
    fees: 60,
    address: {
      line1: "27th Cross, Richmond",
      line2: "Circle, Ring Road, Chandigarh",
    },
  },
];
