import React from "react";
import styles from "../../styles/Header.module.scss";

export default function Header() {
    return <header id={styles.header_container}>
        <div className="nav-section">
            <span>
                Home
            </span>
            <span>
                About
            </span>
            <span>
                Tech Stack
            </span>
            <span>
                Projects
            </span>
            <span>
                Contact
            </span>
        </div>
        <div className="logo-section">
            <svg xmlns="http://www.w3.org/2000/svg" width="31" height="30" viewBox="0 0 31 30" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M15.7469 0C7.36914 0 0.583496 6.7125 0.583496 15C0.583496 21.6375 4.92403 27.2438 10.9515 29.2313C11.7097 29.3625 11.994 28.9125 11.994 28.5188C11.994 28.1625 11.975 26.9812 11.975 25.725C8.16522 26.4187 7.1796 24.8063 6.87633 23.9625C6.70574 23.5313 5.96652 22.2 5.32208 21.8438C4.79135 21.5625 4.03318 20.8688 5.30312 20.85C6.49724 20.8313 7.35019 21.9375 7.6345 22.3875C8.99921 24.6562 11.179 24.0187 12.0509 23.625C12.1835 22.65 12.5816 21.9938 13.0175 21.6188C9.64366 21.2438 6.11816 19.95 6.11816 14.2125C6.11816 12.5812 6.70574 11.2313 7.67241 10.1813C7.52078 9.80625 6.99006 8.26875 7.82404 6.20625C7.82404 6.20625 9.09398 5.8125 11.994 7.74375C13.2071 7.40625 14.496 7.2375 15.7849 7.2375C17.0738 7.2375 18.3626 7.40625 19.5757 7.74375C22.4757 5.79375 23.7457 6.20625 23.7457 6.20625C24.5797 8.26875 24.0489 9.80625 23.8973 10.1813C24.864 11.2313 25.4516 12.5625 25.4516 14.2125C25.4516 19.9687 21.9071 21.2438 18.5332 21.6188C19.0829 22.0875 19.5568 22.9875 19.5568 24.3937C19.5568 26.4 19.5378 28.0125 19.5378 28.5188C19.5378 28.9125 19.8221 29.3813 20.5803 29.2313C23.5905 28.2259 26.2062 26.3121 28.0592 23.7592C29.9123 21.2063 30.9095 18.1429 30.9104 15C30.9104 6.7125 24.1248 0 15.7469 0Z" fill="#666666" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="33" height="32" viewBox="0 0 33 32" fill="none">
                <path d="M17.1871 1.875C8.81339 1.875 2.02368 8.59152 2.02368 16.875C2.02368 25.1585 8.81339 31.875 17.1871 31.875C25.5609 31.875 32.3506 25.1585 32.3506 16.875C32.3506 8.59152 25.5609 1.875 17.1871 1.875ZM24.4744 13.1819C24.4845 13.3393 24.4845 13.5033 24.4845 13.6641C24.4845 18.5792 20.7005 24.2411 13.7855 24.2411C11.6532 24.2411 9.67649 23.6283 8.01121 22.5737C8.31584 22.6071 8.60692 22.6205 8.91831 22.6205C10.6784 22.6205 12.2962 22.0312 13.5858 21.0335C11.9341 21 10.5464 19.9286 10.0725 18.4554C10.6513 18.5391 11.1725 18.5391 11.7682 18.3884C10.9177 18.2175 10.1533 17.7605 9.60479 17.0953C9.05627 16.43 8.7575 15.5973 8.75923 14.7388V14.692C9.25678 14.9699 9.84234 15.1406 10.455 15.1641C9.93996 14.8245 9.5176 14.3645 9.22534 13.8249C8.93309 13.2852 8.77996 12.6825 8.77954 12.0703C8.77954 11.3772 8.96232 10.7444 9.29063 10.1953C10.2346 11.3449 11.4126 12.2851 12.748 12.9548C14.0834 13.6245 15.5463 14.0088 17.0416 14.0826C16.5102 11.5547 18.4192 9.50893 20.714 9.50893C21.7971 9.50893 22.7719 9.95759 23.459 10.6808C24.3085 10.5234 25.1209 10.2087 25.8452 9.78683C25.5643 10.6473 24.9753 11.3739 24.1935 11.8326C24.9516 11.7522 25.6827 11.5446 26.3597 11.2533C25.8486 11.9967 25.2089 12.6563 24.4744 13.1819V13.1819Z" fill="#666666" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="31" height="30" viewBox="0 0 31 30" fill="none">
                <path d="M15.8365 0.600098C7.79689 0.600098 1.27963 7.0471 1.27963 15.0001C1.27963 22.9531 7.79689 29.4001 15.8365 29.4001C23.8762 29.4001 30.3935 22.9531 30.3935 15.0001C30.3935 7.0471 23.8762 0.600098 15.8365 0.600098ZM12.2731 20.9686H9.32536V11.5846H12.2731V20.9686ZM10.7811 10.4326C9.85002 10.4326 9.24803 9.7801 9.24803 8.9731C9.24803 8.1496 9.86821 7.5166 10.819 7.5166C11.7697 7.5166 12.352 8.1496 12.3702 8.9731C12.3702 9.7801 11.7697 10.4326 10.7811 10.4326ZM23.0392 20.9686H20.0914V15.7681C20.0914 14.5576 19.6638 13.7356 18.5978 13.7356C17.7835 13.7356 17.2998 14.2921 17.086 14.8276C17.0072 15.0181 16.9875 15.2881 16.9875 15.5566V20.9671H14.0382V14.5771C14.0382 13.4056 14.0003 12.4261 13.9608 11.5831H16.5219L16.6569 12.8866H16.716C17.1042 12.2746 18.055 11.3716 19.6456 11.3716C21.585 11.3716 23.0392 12.6571 23.0392 15.4201V20.9686V20.9686Z" fill="#666666" />
            </svg>
        </div>
    </header>
}