html-pdf-presentations
======================

This is a small library allowing you to create presentations in HTML. In contrast to most other HTML presentation tools, this one is focussed on simple source code without much magic and the ability to create PDF presentations easily.

The advantage of using HTML and CSS for presentations is the consistency created through CSS selector rules and the control over "what you mean" with HTML as a document format (WYSIWYM). With JS, you can potentially do even more things, which are virtually impossible (or just really hard) with normal presentation software.

For the print view (unscaled, not centered), open `index.html`, for a nicer editing experience (scaled to browser size, centered) open `index.html?printing=false`.

In order to export to PDF, the library uses the small `html2pdf.sh` I wrote previously (https://github.com/gfmio/html2pdf), which utilises `wkhtmltopdf`, so you will need to install that first for PDF export (see also http://wkhtmltopdf.org/). You can export the PDF using `./html2pdf.sh index.html output.pdf`. By default, this tool creates 1920px x 1080px PDFs, the size can be specified by adding parameters to the call, e.g. `./html2pdf.sh index.html output.pdf 1280 800` for 1280px x 800px.

By default, the presentation size is 1920px x 1080px, but you can change the size using the SCSS variables in `css/settings.scss`. There, you can also change all other important parameters regarding colors, font-sizes, fonts etc.

Have fun building your presentations!

## To do:

* Currently does not support animations or the like. Hence, this functionality might be added in the future.

License: MIT

Copyright (C) 2015 Frédérique Mittelstaedt, gfm.io, me@gfm.io
