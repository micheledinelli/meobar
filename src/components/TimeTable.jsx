import React from "react";

export default function TimeTable() {
    return (
        // <div>
        //   <div className="text-center md:text-4xl">
        //     ORARI DI APERTURA
        //   </div>
        //   <div>
        //     <table className="md:w-full">
        //       <tbody>
        //         <tr>
        //           <td className="md:text-3xl pe-6">Lunedì</td>
        //           <td className="md:text-5xl px-auto">6 AM - 8 PM</td>
        //         </tr>
        //         <tr>
        //           <td className="md:text-3xl pe-6">Martedì</td>
        //           <td className="md:text-5xl px-auto">6 AM - 11 PM</td>
        //         </tr>
        //         <tr>
        //           <td className="md:text-3xl pe-6">Mercoledì</td>
        //           <td className="md:text-5xl px-auto">6 AM - 11 PM</td>
        //         </tr>
        //         <tr>
        //           <td className="md:text-3xl pe-6">Giovedì</td>
        //           <td className="md:text-5xl px-auto">6 AM - 11 PM</td>
        //         </tr>
        //         <tr>
        //           <td className="md:text-3xl pe-6">Venerdì</td>
        //           <td className="md:text-5xl px-auto">6 AM - 2 AM</td>
        //         </tr>
        //         <tr>
        //           <td className="md:text-3xl pe-6">Sabato</td>
        //           <td className="md:text-5xl px-auto">7 AM - 2 AM</td>
        //         </tr>
        //         <tr>
        //           <td className="md:text-3xl pe-6">Domenica</td>
        //           <td className="md:text-5xl px-auto">CLOSED</td>
        //         </tr>
        //       </tbody>
        //     </table>
        //   </div>
        // </div>
        <div>
          <div className="text-center md:text-4xl">
            ORARI DI APERTURA
          </div>
          <div className="md:grid md: grid-cols-2">
            <div>
              <div className="md:text-3xl md:italic pe-6">Lunedì</div>
              <div className="md:text-5xl px-auto">6 AM - 8 PM</div>
            </div>
            <div>
              <div className="md:text-3xl md:italic pe-6">Martedì</div>
              <div className="md:text-5xl px-auto">6 AM - 11 PM</div>
            </div>
            <div>
              <div className="md:text-3xl md:italic pe-6">Mercoledì</div>
              <div className="md:text-5xl px-auto">6 AM - 11 PM</div>
            </div>
            <div>
              <div className="md:text-3xl md:italic pe-6">Giovedì</div>
              <div className="md:text-5xl px-auto">6 AM - 11 PM</div>
            </div>
            <div>
              <div className="md:text-3xl md:italic pe-6">Venerdì</div>
              <div className="md:text-5xl px-auto">6 AM - 2 AM</div>
            </div>
            <div>
              <div className="md:text-3xl md:italic pe-6">Sabato</div>
              <div className="md:text-5xl px-auto">7 AM - 2 AM</div>
            </div>
            <div />
            <div>
              <div className="md:text-3xl md:italic pe-6">Domenica</div>
              <div className="md:text-5xl px-auto">CLOSED</div>
            </div>
          </div>
        </div>
      );
}