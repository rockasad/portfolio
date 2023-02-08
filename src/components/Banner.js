import { useState,useEffect } from "react";
import { Container,Row ,Col} from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons"; 
import headerImg from "../assets/img/Header.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () =>{
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = [ "Web Developer", "Web Designer", "UI/UX Designer" ];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState (300 - Math.random() * 100);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            ticker();
        },delta)
        return()=>{clearInterval()};
    }, [text])

    const tick =() => {
            let i= loopNum % toRotate.length;
            let fullText =toRotate[i];
            let updatedText =isDeleting ? fullText.substring(0,text.length -1 ):fullText.substring(0,text.length+1);

            setText(updatedText);
            
            if (isDeleting){
                setDelta(prevDelta => prevDelta /2)
            }
            if(!isDeleting && updatedText === fullText){
                setIsDeleting(true);
                setDelta(period);
            }else if(isDeleting && updatedText === ''){
                setIsDeleting(false);
                setLoopNum(loopNum+1);
                setDelta(500);
            }
        }
    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-item-center">
                    <Col xs={12} md={6} xl={7}>
                            <TrackVisibility>
                                {({ isVisible}) => 
                                    <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                        <span className="tagline">Welcome to my Portfolio </span>
                                        <h1>{`Hi i'm Surachat`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Web Developer", "Web Designer", "UI/UX Designer" ]'><span className="wrap">{text}</span></span></h1>
                                        <p>ผมเป็นนักพัฒนาที่กำลังมีความตั้งใจที่จะเรียนรู้และพัฒนาตนเองให้เป็นมืออาชีพที่มีความสามารถยิ่งขึ้น ผมกำลังมีความตั้งใจในการหาข้อมูลและการเรียนรู้เกี่ยวกับสิ่งใหม่ๆ เพื่อให้เข้าใจและสามารถใช้งานได้อย่างแม่นยำ และมีความพร้อมในการดำเนินการให้ได้อย่างสำเร็จลุล่วงในอนาคต</p>
                                        <button onClick={() => console.log('connect')}>เข้าสู่ระบบ <ArrowRightCircle size={25} /></button>
                                    </div> }
                            </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
                </Row>
            </Container>
        </section>
    )
}