import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

const FirestoreData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Function to fetch data from Firestore
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "content")); // Replace with your Firestore collection name
        const documents = [];
        querySnapshot.forEach((doc) => {
          documents.push({ id: doc.id, ...doc.data() });
        });
        setData(documents);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    // Call the fetchData function when the component mounts
    fetchData();
  }, []); // Empty dependency array ensures this effect runs once on mount

  return (
    <div>
      <h1>Content</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <h2>{item.title}</h2>
            <div>
              {/* Assuming the link field contains YouTube video URLs */}
              <iframe
                title={item.title}
                width="560"
                height="315"
                src={item.link}
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FirestoreData;
