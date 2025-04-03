import styles from "./styleModule/updateInfo.module.css"

export default function updateInfo() {
    return (
        <div className={styles.wrap}>
            <div className={styles.con}>
                <div className={styles.update_Info_Title}>회원정보 수정</div>
                <div className={styles.update_Info_Box}>

                    <h3>update_Info_Box</h3>

                    <div className={styles.update_Password}>
                        <h4>비밀번호 변경</h4>
                        <div>
                            <label>
                                비밀번호 확인: <input type={"password"}></input>
                            </label>
                        </div>
                        <div>
                            <label>
                                변경 할 비밀번호:<input type={"password"}></input>
                            </label>
                        </div>
                    </div>

                    <div className={styles.update_dislikeFood_Box}>
                        알러지 및 제외 음식 변경
                        <div className={styles.update_dislikeFood_inputBox}>
                            <div className={styles.update_dislikeFood_search}>
                                <label>
                                    <input type="text"></input>
                                </label>
                            </div>
                            <div>
                                <label>
                                    <ul>
                                        <li>브로콜리 <button>x</button></li>
                                        <li>사과    <button>x</button></li>
                                        <li>양파    <button>x</button></li>
                                    </ul>
                                </label>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}