import React from 'react';
import { Container, Accordion, Card } from 'react-bootstrap';
import { FaQuestionCircle } from 'react-icons/fa';
import '../dist/css/faq.css';

const FAQ = () => {
  const faqData = [
    {
      question: "Bagaimana cara memesan bus pariwisata?",
      answer: "Anda dapat memesan bus pariwisata kami dengan menghubungi nomor telepon kami, mengisi formulir pemesanan di website, atau mengirim email ke alamat yang tertera di halaman kontak."
    },
    {
      question: "Berapa lama sebelumnya saya harus memesan bus?",
      answer: "Kami menyarankan untuk memesan setidaknya 2 minggu sebelum tanggal keberangkatan untuk memastikan ketersediaan. Namun, kami juga dapat mengakomodasi pemesanan mendadak tergantung pada ketersediaan armada."
    },
    {
      question: "Apakah ada batasan jarak untuk perjalanan?",
      answer: "Tidak ada batasan jarak spesifik. Kami melayani perjalanan jarak dekat maupun jauh, baik dalam kota maupun antar kota di seluruh Indonesia."
    },
    {
      question: "Apakah supir bus sudah termasuk dalam harga sewa?",
      answer: "Ya, harga sewa bus sudah termasuk jasa supir profesional yang berpengalaman dan berlisensi."
    },
    {
      question: "Bagaimana dengan kebijakan pembatalan dan pengembalian dana?",
      answer: "Kebijakan pembatalan kami bervariasi tergantung pada waktu pembatalan. Pengembalian dana penuh biasanya diberikan untuk pembatalan yang dilakukan minimal 7 hari sebelum tanggal keberangkatan. Untuk informasi lebih lanjut, silakan hubungi tim layanan pelanggan kami."
    },
    {
      question: "Apakah bus dilengkapi dengan fasilitas WiFi?",
      answer: "Sebagian besar armada kami dilengkapi dengan WiFi gratis. Namun, ketersediaan dan kekuatan sinyal dapat bervariasi tergantung pada rute perjalanan."
    }
  ];

  return (
    <div className="faq-bg">
      <Container className="py-5">
        <h1 className="text-center mb-5 faq-title">
          <FaQuestionCircle className="me-3" />
          Frequently Asked Questions
        </h1>
        <Accordion defaultActiveKey="0" flush>
          {faqData.map((faq, index) => (
            <Accordion.Item eventKey={index.toString()} key={index}>
              <Accordion.Header>{faq.question}</Accordion.Header>
              <Accordion.Body>{faq.answer}</Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </Container>
    </div>
  );
};

export default FAQ;
