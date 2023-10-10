import React from "react";

export default function TimeTable() {
    return (
        <div>
          <span class="text-6xl">ORARIO DI APERTURA</span>
          <table class="table-auto">
            <tr>
              <td class="text-4xl px-6">Lunedì</td>
              <td class="text-5xl px-auto">6 AM - 8 PM</td>
            </tr>
            <tr>
              <td class="text-4xl px-6">Martedì</td>
              <td class="text-5xl px-auto">6 AM - 11 PM</td>
            </tr>
            <tr>
              <td class="text-4xl px-6">Mercoledì</td>
              <td class="text-5xl px-auto">6 AM - 11 PM</td>
            </tr>
            <tr>
              <td class="text-4xl px-6">Giovedì</td>
              <td class="text-5xl px-auto">6 AM - 11 PM</td>
            </tr>
            <tr>
              <td class="text-4xl px-6">Venerdì</td>
              <td class="text-5xl px-auto">6 AM - 2 AM</td>
            </tr>
            <tr>
              <td class="text-4xl px-6">Sabato</td>
              <td class="text-5xl px-auto">7 AM - 2 AM</td>
            </tr>
            <tr>
              <td class="text-4xl px-6">Domenica</td>
              <td class="text-5xl px-auto">CLOSED</td>
            </tr>
          </table>
        </div>
      );
}