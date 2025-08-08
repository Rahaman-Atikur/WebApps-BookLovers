import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { getStoredBook } from '../../Utilities/addToDB';

const ReadList = () => {
    const [readList, setReadList] = useState([])
    const [sort, setSort] = useState("");
    // const data = useLoaderData();
    const data = useLoaderData();
    console.log(data);
    useEffect(() => {
        const storedBookData = getStoredBook();
        // console.log(storedBookData);
        const convertedStoredBooks = storedBookData.map((id) => parseInt(id));
        console.log(convertedStoredBooks);
        const myReadList = data.filter((book) => convertedStoredBooks.includes(book.bookId));
        setReadList(myReadList);
    }, [])

    const handleSort = (type) => {
        setSort(type);
        if(type==="pages"){
            const sortedByPage = [...readList].sort((a,b)=>a.totalPages - b.totalPages)
            setReadList(sortedByPage);
            console.log(sortedByPage);
        }
        if(type==="ratings"){
            const sortedByRatings = [...readList].sort((a,b)=>a.totalPages -b.totalPages)
            setReadList(sortedByRatings);

        }
    }
    // useEffect(() => {
    //     const dataFromLocalStorage = getStoredBook();
    //     const convertedDataFromLocalStorage = dataFromLocalStorage.map((id) => parseInt(id));

    //     const readList = data.filter((book) => convertedDataFromLocalStorage.includes(book.bookId))
    //     setReadList(readList);

    // }, [])
    return (
        <div>
            <div className="dropdown">
                <div tabIndex={0} role="button" className="btn m-1">Sort by : {sort ? sort : ""}</div>
                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                    <li><a onClick={() => handleSort("pages")}>Pages</a></li>
                    <li><a onClick={() => handleSort("ratings")}>Ratings</a></li>
                </ul>
            </div>
            <Tabs>
                <TabList>
                    <Tab>Title 1</Tab>
                    <Tab>Title 2</Tab>
                </TabList>

                <TabPanel>
                    <h2>{readList.length}</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};
export default ReadList;