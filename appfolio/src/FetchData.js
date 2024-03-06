import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function FetchCSVData(props) {
    const [csvData, setCsvData] = useState([]);

    //optimize this to not refetch data.
    useEffect(() => {
        fetchCSVData();
    }, []);

    function parseCSV(csvText) {

        const data = []; // Initialize an object to store parsed data

        const tables = csvText.split("Execution")
        
        for (let i = 1; i < tables.length; i++) {
            const rows = tables[i].split(/\r?\n/)
            const tableTitle = rows[0].split(",")[1];
            data.push({[tableTitle] : {}})
            for (let j = 1; j < rows.length; j++) {
                const row = rows[j].split(',')
                const currentTable = data.find(item => Object.keys(item)[0] === tableTitle);
                if (currentTable) {
                    currentTable[tableTitle][row[1]] = [];
                    for (let k = 2; k < row.length; k++) {
                        currentTable[tableTitle][row[1]].push(row[k]);
                    }
                }
            }
        }
    
        return data;
    }
    

    const fetchCSVData = () => {
        const csvUrl = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTJzDpfdIB-Vqbew0N_M1HBnBEQdQuMwgvzIRFPpCyKYk_ACmmZTcb6VG_8WuLIVkRoHQBpdq50iVzg/pub?output=csv'; // Replace with your Google Sheets CSV file URL
        axios.get(csvUrl)
            .then((response) => {
                const parsedCsvData = parseCSV(response.data);
                setCsvData(parsedCsvData);
            })
            .catch((error) => {
                console.error('Error fetching CSV data:', error);
            });
    }
    
    return csvData;
}


