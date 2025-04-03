import styles from "./styleModule/join.module.css"

export default function Join() {
    return (
        <div className={styles.container}>
            <div className={styles.formBox}>
                <div className={styles.closeButton}>
                    <button>닫기</button>
                </div>
                <h4 className={styles.title}>회원 가입</h4>
                <hr />
                <div className={styles.idInputContainer}>
                    {/* 아이디 인증 인증번호 */}
                    <div className={styles.authContainer}>
                        <label className={styles.idInputLabel}>
                            <div className={styles.icon}>🔍</div>
                            <input className={styles.idInputFiled} type="email" placeholder="아이디(이메일)" />
                            <input type="button" value={"인증번호 전송"} />
                        </label>
                        <div>

                        </div>
                        
                            <label className={styles.idInputLabel}>
                                <input className={styles.idInputFiled} placeholder="인증번호" />
                            <input type="button" value={"인증하기"} />
                            </label>
                        
                    </div>

                    <label className={styles.inputLabel}>
                        <div className={styles.icon}>🔑</div>
                        <input className={styles.inputField} type="password" placeholder="비밀번호" />
                    </label>
                    <label className={styles.inputLabel}>
                        <div className={styles.icon}>🔑</div>
                        <input className={styles.inputField} type="password" placeholder="비밀번호 확인" />
                    </label>
                    <label className={styles.inputLabel}>
                        <div className={styles.icon}>👤</div>
                        <input className={styles.inputField} type="text" placeholder="이름" />
                    </label>
                    <label className={styles.inputLabel}>
                        <div className={styles.icon}>🗓️</div>
                        <input className={styles.inputField} type="tel" placeholder="생년월일" />
                    </label>
                    <label className={styles.inputLabel}>
                        <div className={styles.icon}>❌</div>
                        <input className={styles.inputField} type="tel" placeholder="제외, 알러지음식" />
                    </label>
                </div>
                <div className={styles.buttonContainer}>
                    <button className={styles.button}>취소</button>
                    <button className={styles.button}>회원가입</button>
                </div>
            </div>
        </div>
    );
}
