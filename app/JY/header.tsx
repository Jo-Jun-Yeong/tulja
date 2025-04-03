import Image from "next/image";

export default function header() {
  return (
    <div style={{width:"80%", margin:"auto", paddingTop:"12px", paddingBottom:"12px", backgroundColor:"#f99524"}}>
      <div style={{margin:"auto", display:"flex", justifyContent:"space-between"}}>
      <div style={{backgroundColor:"pink", fontSize:"21px", fontWeight:"700", height:"100%",display:"felx"}}>
        냉장고를 털자
      </div>
      <div style={{display:"flex", justifyContent:"space-between"}}>
        <div style={{backgroundColor:"blue", fontSize:"21px", margin: "0 10px" }}>
            <Image
            src="/images/icon1.png" // 이미지 경로
            alt="Description of the image" // 이미지 설명
            width={21} // 이미지 너비
            height={21} // 이미지 높이
        />
        </div>
        <div style={{backgroundColor:"blue", fontSize:"21px", margin: "0 10px" }}>
        <Image
            src="/images/icon1.png" // 이미지 경로
            alt="Description of the image" // 이미지 설명
            width={21} // 이미지 너비
            height={21} // 이미지 높이
        />
        </div>
        <div style={{backgroundColor:"blue", fontSize:"21px", margin: "0 10px" }}>
        <Image
            src="/images/icon1.png" // 이미지 경로
            alt="Description of the image" // 이미지 설명
            width={21} // 이미지 너비
            height={21} // 이미지 높이
        />
        </div>
        </div>
      </div>
    </div>
  );
}
