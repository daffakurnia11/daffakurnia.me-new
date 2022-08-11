import React from 'react'
import AOS from "aos";
import "aos/dist/aos.css";

export default function DataAos(props) {
  React.useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 700,
    });
    AOS.refresh();
  }, [])

  return (
    <div data-aos={"fade-up"} style={{ width: '100%' }}>{props.children}</div>
  )
}
