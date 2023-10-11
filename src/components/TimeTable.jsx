import React from "react";

export default function TimeTable() {
    return (
        <div>
          <span class="md:text-6xl">ORARIO DI APERTURA</span>
          <table class="md:table-auto">
            <tr>
              <td class="md:text-4xl px-6">Lunedì</td>
              <td class="md:text-5xl px-auto">6 AM - 8 PM</td>
            </tr>
            <tr>
              <td class="md:text-4xl px-6">Martedì</td>
              <td class="md:text-5xl px-auto">6 AM - 11 PM</td>
            </tr>
            <tr>
              <td class="md:text-4xl px-6">Mercoledì</td>
              <td class="md:text-5xl px-auto">6 AM - 11 PM</td>
            </tr>
            <tr>
              <td class="md:text-4xl px-6">Giovedì</td>
              <td class="md:text-5xl px-auto">6 AM - 11 PM</td>
            </tr>
            <tr>
              <td class="md:text-4xl px-6">Venerdì</td>
              <td class="md:text-5xl px-auto">6 AM - 2 AM</td>
            </tr>
            <tr>
              <td class="md:text-4xl px-6">Sabato</td>
              <td class="md:text-5xl px-auto">7 AM - 2 AM</td>
            </tr>
            <tr>
              <td class="md:text-4xl px-6">Domenica</td>
              <td class="md:text-5xl px-auto">CLOSED</td>
            </tr>
          </table>
        </div>
      );
}