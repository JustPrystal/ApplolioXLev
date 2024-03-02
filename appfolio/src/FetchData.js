import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function FetchCSVData(props) {
    const [csvData, setCsvData] = useState([]);

    const fetchCSVData = () => {
        const csvUrl = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTJzDpfdIB-Vqbew0N_M1HBnBEQdQuMwgvzIRFPpCyKYk_ACmmZTcb6VG_8WuLIVkRoHQBpdq50iVzg/pubhtml'; // Replace with your Google Sheets CSV file URL
        axios.get(csvUrl)
            .then((response) => {
                // ...
            })
            .catch((error) => {
                // Handle errors
            });
    }
    
    useEffect(() => {
        fetchCSVData();
    }, []);
    
}