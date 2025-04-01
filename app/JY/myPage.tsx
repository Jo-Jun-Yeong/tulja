import Image from "next/image"
import styles from "./styleModule/myPage.module.css"

export default function myPage() {
    return (
        <div className={styles.con}>
            <div className={styles.profile}>

                <div className={styles.profile_photo}>
                    <Image
                        src="/images/icon1.png"
                        alt="test 이미지"
                        width={130}
                        height={130}
                        layout="responsive" />
                </div>

                <div style={{ display: "table-row", alignContent: "center" }}>
                    <div className={styles.profile_name}>
                        이름
                    </div>
                    <div className={styles.profile_intro}>
                        소개
                    </div>
                </div>

            </div>

            <hr style={{ color: "#3d3d3d", width: "100%", marginTop: "20px" }} />

            <div className={styles.category}>
                찜 목록 / 리뷰 목록 / 전체
            </div>

            <hr style={{ color: "#3d3d3d", width: "100%" }} />

            <div className={styles.list}>
                {/* 반복문을 통한 개시물 불러오기 */}
                <div className={styles.post}>
                    <div className={styles.post_photo}>
                        <Image
                        src="/images/icon1.png" // 이미지 경로
                        alt="Description of the image" // 이미지 설명
                        layout="fill"   // 부모 요소에 맞게 "체우기"
                        />
                    </div>
                    <div style={{display:"flex", flexDirection:"column", height:"auto"}}>
                        <div className={styles.post_title}>
                            제목
                        </div>
                        <div className={styles.post_text}>
                        본문본문본문본문본문본문본문본문본문본문
                        본문본문본문본문본문본문본문본문본문본문
                        </div>
                    </div>
                </div>
                <hr style={{ color: "#3d3d3d", width: "100%", marginTop: "1px" }} />
                
            </div>

        </div>
    )
}