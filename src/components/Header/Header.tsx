"use client";
import React, { useEffect, useState } from "react";
import styles from "@/assets/css/header/page.module.css";
import { useLocale } from "next-intl";
import Mainlogo from "@/assets/images/Logo (1).png";
import Image from "next/image";
// import LocaleSwitcher from "@/Ui/LocaleSwitcher";
import ButtonProps from "@/components/Buttons/Button";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
const Header: React.FC = () => {
  return (
    <header className="container">
      <div className={`${styles.banner}`}>
        <div className={`${styles.left}`}>
          <Image src={Mainlogo} alt="SVP" />
          <ul className="flex items-center gap-6">
            <li>Transportation</li>
            <li>Customs broker</li>
            <li>Warehouse</li>
            <li>Cargo insurance</li>
          </ul>
        </div>
        <div className={`${styles.right}`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
          >
            <path
              d="M6.004 10H30.004M6 18H29.994M6.004 26H29.994"
              stroke="#4E4E4E"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <ul className="flex items-center gap-6">
            <li>About us</li>
            <li>Contact</li>
            <li>
              <FormGroup>
                <Input type="select" name="select" id="exampleSelect">
                  <option>En</option>
                  <option>AZ</option>
                  <option>RU</option>
                </Input>
              </FormGroup>
            </li>
            <ButtonProps className={styles.button} title="Start trading" />
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
