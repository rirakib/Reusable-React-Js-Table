import { useState } from "react";
import Tbody from "./body.component";
import Header from "./header.component";

const Table = ({ data , columns}) => {
   
    
    return (
        <>
            <table className="table table-bordered table-striped">
                <thead className="bg-primary text-light">
                    <Header columns = {columns} />
                </thead>
                <tbody>
                    <Tbody data = { data } columns = { columns }/>
                </tbody>
            </table>
        </>
    )
}

export default Table;