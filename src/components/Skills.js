import { useState } from "react";
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import TrackVisibility from 'react-on-screen';

export const Skills = () => {

  const [isVisibleOnce, setIsVisibleOnce] = useState(false);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill py-5" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <TrackVisibility partialVisibility>
              {({ isVisible }) => {
                if (isVisible && !isVisibleOnce) {
                  setIsVisibleOnce(true);
                }
                return (
                  <div className={isVisibleOnce ? "custom-fade-in" : "hidden"}>
                    <div className="skill-bx wow zoomIn p-5">
                      <h2 className="mb-4">Skills</h2>
                      <p className="mb-5">I'm proficient in Python, Java, PHP, SQL, JavaScript, and so much more!</p>
                      <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                        <div className="item">
                          <img src={meter1} alt="Image" />
                          <h5>Software Engineering</h5>
                        </div>
                        <div className="item">
                          <img src={meter2} alt="Image" />
                          <h5>Machine Learning</h5>
                        </div>
                        <div className="item">
                          <img src={meter3} alt="Image" />
                          <h5>Data Science</h5>
                        </div>
                        <div className="item">
                          <img src={meter1} alt="Image" />
                          <h5>UX/UI Design</h5>
                        </div>
                      </Carousel>
                    </div>
                  </div>
                );
              }}
            </TrackVisibility>
          </div>
        </div>
      </div>
    </section>
  )
}
