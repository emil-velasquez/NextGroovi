"use client"
import styles from "../../_styles/top-bar/SearchBar.module.scss";

import React, { useState } from "react"
import { useRouter } from "next/navigation";

import Button from "@/sdk/Button/button";
import { BsSearch } from "react-icons/bs";

export default function SearchBar() {
    const [searchText, setSearchText] = useState("");
    const router = useRouter();

    function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
        if (event.key === "Enter") {
            onSubmit();
        }
    }

    function onSubmit() {
        router.push(`/search?q=${searchText}`);
    }

    return (
        <div className={styles.searchBarContainer}>
            <input type="text" className={styles.searchText} placeholder="Search" onChange={e => setSearchText(e.target.value)} onKeyDown={handleKeyDown} />
            <div className={styles.searchButtonContainer}>
                <Button onClick={onSubmit} priority="secondary">
                    <div className={styles.searchButtonWrapper}>
                        <BsSearch className={styles.searchButton} />
                    </div>
                </Button>
            </div>
        </div>
    )
}