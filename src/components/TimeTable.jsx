import React from "react";

export default function TimeTable() {
    return (
        <div className="">
          <div className="text-center md:text-4xl">
            ORARI DI APERTURA
          </div>
          <div>
            <table className="md:table-auto">
              <tbody>
                <tr>
                  <td className="md:text-3xl pe-6">Lunedì</td>
                  <td className="md:text-5xl px-auto">6 AM - 8 PM</td>
                </tr>
                <tr>
                  <td className="md:text-3xl pe-6">Martedì</td>
                  <td className="md:text-5xl px-auto">6 AM - 11 PM</td>
                </tr>
                <tr>
                  <td className="md:text-3xl pe-6">Mercoledì</td>
                  <td className="md:text-5xl px-auto">6 AM - 11 PM</td>
                </tr>
                <tr>
                  <td className="md:text-3xl pe-6">Giovedì</td>
                  <td className="md:text-5xl px-auto">6 AM - 11 PM</td>
                </tr>
                <tr>
                  <td className="md:text-3xl pe-6">Venerdì</td>
                  <td className="md:text-5xl px-auto">6 AM - 2 AM</td>
                </tr>
                <tr>
                  <td className="md:text-3xl pe-6">Sabato</td>
                  <td className="md:text-5xl px-auto">7 AM - 2 AM</td>
                </tr>
                <tr>
                  <td className="md:text-3xl pe-6">Domenica</td>
                  <td className="md:text-5xl px-auto">CLOSED</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      );
}