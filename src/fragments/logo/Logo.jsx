import Image from "next/image";
import logo from "@/assets/logo.png"
import style from "./styles.module.scss"


export function Logo() {
    return(
        <div className={style.logo}>
            <figure>
                <Image src={logo} alt="Logo da LehDecore"/>
            </figure>
            <div>
                <h1>LehDecore</h1>
                <p>Festas e eventos</p>
            </div>
        </div>
    )
}