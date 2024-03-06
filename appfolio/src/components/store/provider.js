import { createContext, useContext, useState } from "react";

const FormContext = createContext();

export const useFormData = () => useContext(FormContext);

export const FormProvider = ({children}) => {
    const [csv, setCsv] = useState(null);
    const [loanType, setLoanType] = useState(null);
    const [assetType, setAssetType] = useState(null);
    const [loanAmount, setLoanAmount] = useState(0);
    const [recourse, setRecourse] = useState(null);
    const [table, setTable] = useState(null);
    
    //setters
    const setLoanTypeData = (value) => {
        setLoanType(value)
    }
    const setAssetTypeData = (value) => {
        setAssetType(value)
    }
    const setLoanAmountData = (value) => {
        setLoanAmount(value)
    }
    const setRecourseData = (value) => {
        setRecourse(value)
    }
    const setCsvData = (value) => {
        setCsv(value);
    }
    const setTableData = (value) => {
        setTable(value);
    }


    //getters
    const getLoanTypeData = () =>{
        return loanType
    }
    const getAssetTypeData = () =>{
        return assetType
    }
    const getLoanAmountData = () =>{
        return loanAmount
    }
    const getRecourseData = () =>{
        return recourse
    }
    const getCsvData = () => {
        return csv;
    }
    const getTableData = () => {
        return table;
    }

    const dataFunctions = {
        setLoanTypeData,
        getLoanTypeData,
        setAssetTypeData,
        getAssetTypeData,
        setLoanAmountData,
        getLoanAmountData,
        setRecourseData,
        getRecourseData,
        setCsvData, 
        getCsvData,
        setTableData,
        getTableData
    }

    return (
        <FormContext.Provider value={dataFunctions}>
            {children}
        </FormContext.Provider>
    )
}        