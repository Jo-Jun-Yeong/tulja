import styles from './styleModule/loginPage.module.css';

export default function login() {
    return (
        <div className={styles.con}>
            <div className={styles.loginbox}>
                <div className={styles.inputBox}>
                    <div className={styles.idBox}>
                        <label >
                            <input type="text" placeholder='아이디(이메일)' />
                        </label>
                    </div>
                    <div className={styles.pwBox}>
                        <label>
                            <input type="password" placeholder='비밀번호' />
                        </label>
                    </div>
                </div>
                <div className={styles.loginButton}><input type='button' value={'로그인'} /></div>
                <div style={{ display: "flex", backgroundColor: "greenyellow" }}>
                    <div> <a href=''>아이디 찾기</a> </div> |
                    <div> <a href=''>비밀번호 찾기 </a></div> |
                    <div><a href=''>회원가입</a></div>
                </div>
            </div>
        </div>
    );
}