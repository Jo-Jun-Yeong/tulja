export default function Join() {
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            backgroundColor: "red",
            width: "100%"
        }}>
            <div style={{
                width: "80%",
                maxWidth: "600px",
                backgroundColor: "white",
                padding: "20px",
                borderRadius: "10px",
                boxShadow: "0px 4px 6px rgba(0,0,0,0.1)"
            }}>
                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                    <button>닫기</button>
                </div>
                <h4 style={{ textAlign: "center" }}>회원정보 입력</h4>
                <hr />
                <div style={{ width: "100%" }}>
                    <label style={{ display: "flex", alignItems: "center", border: "1px solid #D3D3D3", height: "45px", margin: "10px 0" }}>
                        <div style={{padding: "5px", margin:"5px" }}>🔍</div>
                        <input style={{
                            border: "none",
                            backgroundColor: "transparent",
                            width: "100%",
                            padding: "10px"
                        }} type="email" placeholder="아이디(이메일)" />
                    </label>
                    <label style={{ display: "flex", alignItems: "center", border: "1px solid #D3D3D3", height: "45px", margin: "10px 0" }}>
                        <div style={{padding: "5px", margin:"5px" }}>🔑</div>
                        <input style={{
                            border: "none",
                            backgroundColor: "transparent",
                            width: "100%",
                            padding: "10px"
                        }} type="password" placeholder="비밀번호" />
                    </label>
                    <label style={{ display: "flex", alignItems: "center", border: "1px solid #D3D3D3", height: "45px", margin: "10px 0" }}>
                        <div style={{ padding: "5px", margin:"5px" }}>🔑</div>
                        <input style={{
                            border: "none",
                            backgroundColor: "transparent",
                            width: "100%",
                            padding: "10px"
                        }} type="password" placeholder="비밀번호 확인" />
                    </label>
                    <label style={{ display: "flex", alignItems: "center", border: "1px solid #D3D3D3", height: "45px", margin: "10px 0" }}>
                        <div style={{padding: "5px", margin:"5px" }}>👤</div>
                        <input style={{
                            border: "none",
                            backgroundColor: "transparent",
                            width: "100%",
                            padding: "10px"
                        }} type="text" placeholder="이름" />
                    </label>
                    <label style={{ display: "flex", alignItems: "center", border: "1px solid #D3D3D3", height: "45px", margin: "10px 0" }}>
                        <div style={{padding: "5px", margin:"5px" }}>📞</div>
                        <input style={{
                            border: "none",
                            backgroundColor: "transparent",
                            width: "100%",
                            padding: "10px"
                        }} type="tel" placeholder="휴대폰 번호" />
                    </label>
                </div>
                <div style={{display: "flex", alignItems: "center", justifyContent:"center"}}>
                    <button style={{margin:"10px", padding:"5px"}}>취소</button>
                    <button style={{margin:"10px", padding:"5px"}}>회원가입</button>
                </div>
            </div>
        </div>
    );
}
