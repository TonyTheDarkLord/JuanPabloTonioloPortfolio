import { url } from 'inspector';

export default function Home() {
  return (
    <main>
      <section
        id="section1"
        className="section parallax-section"
        style={{
          backgroundImage: "url('https://via.placeholder.com/1920x1080')",
        }}
      >
        <h2>Juan Pablo Toniolo</h2>
        <div style={{ display: 'flex' }}>
          <img
            src="https://www.optimanet.com.ar/wp-content/uploads/fortigate-100f-front.png"
            alt="Image 1"
          />
        </div>
      </section>

      <section
        id="section2"
        className="section parallax-section"
        style={{
          backgroundImage: "url('https://via.placeholder.com/1920x1080')",
        }}
      >
        <h2>Section 2</h2>
        <div style={{ display: 'flex' }}>
          <img
            src="https://dl.ui.com/qsg/MX/UAP-AC-HD/image/UAP-AC-PRO_UniFi_Switch_Power_Connection_Diagram_v2.png"
            alt="Image 2"
          />
        </div>
      </section>

      <section
        id="section3"
        className="section parallax-section"
        style={{
          backgroundImage: "url('https://via.placeholder.com/1920x1080')",
        }}
      >
        <h2>Section 3</h2>
        <div style={{ display: 'flex' }}>
          <img
            src="https://www.austin-hughes.com/wp-content/uploads/2020/09/IR-SR600700-135-F_Bserver_open.png"
            alt="Image 3"
          />
          <img
            src="https://cwsegypt.com/wp-content/uploads/2023/11/E3SUPS30KHB1.png"
            alt="Image 4"
          />
        </div>
      </section>
    </main>
  );
}
