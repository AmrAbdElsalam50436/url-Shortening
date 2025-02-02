import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // استيراد الأنماط الافتراضية
import image from '../../images/illustration-working.svg';
import styles from './Home.module.css';

const Home = () => {
  const [link, setLink] = useState('');
  const [error, setError] = useState('');
  const [shortenedLinks, setShortenedLinks] = useState([]);

  // دالة لتقصير الرابط محليًا
  const generateShortLink = (longLink) => {
    const uniqueId = Math.random().toString(36).substring(7);
    return `https://short.ly/${uniqueId}`;
  };

  // التحقق من صحة الرابط
  const isValidLink = (url) => {
    const regex = /^(https?:\/\/)?([\da-z.-]+\.[a-z.]{2,6})([\/\w .-]*)*\/?$/;
    return regex.test(url);
  };

  // التعامل مع الرابط عند النقر على الزر
  const handleLink = () => {
    if (link.trim() === '') {
      setError('*Please add a link'); // إظهار رسالة خطأ إذا كان الرابط فارغًا
    } else if (!isValidLink(link)) {
      setError('*Please enter a valid link'); // إظهار رسالة خطأ إذا كان الرابط غير صحيح
    } else {
      setError(''); // إخفاء الخطأ إذا كان الرابط صحيحًا
      const shortLink = generateShortLink(link);
      setShortenedLinks((prevLinks) => [...prevLinks, { long: link, short: shortLink }]);
      setLink(''); // مسح حقل الإدخال بعد الإضافة
      toast.success('Link shortened successfully!'); // إظهار Toast عند النجاح
    }
  };

  // نسخ الرابط إلى الحافظة
  const copyToClipboard = (shortLink) => {
    navigator.clipboard.writeText(shortLink);
    toast.info('Copied to clipboard: ' + shortLink); // إظهار Toast عند النسخ
  };

  return (
    <div className="container">
      {/* ToastContainer لعرض الرسائل */}
      <ToastContainer position="top-center" autoClose={3000} />

      {/* القسم العلوي */}
      <div className="row mt-5 mb-5 d-flex align-items-center justify-content-center">
        <div className="col-md-6 order-1 order-md-2">
          <img src={image} alt="Illustration" className="img-fluid" />
        </div>
        <div className={`col-md-6 order-2 order-md-1 ${styles.text}`}>
          <h1 className={styles.splitText}>
            <span className={styles.firstLine}>More than just</span>{' '}
            <span className={styles.secondLine}>shorter links</span>
          </h1>
          <div className="text-body-tertiary mb-3">
            <span className="d-block">
              Build your brand's recognition and get detailed
            </span>
            <span className="d-block">
              insights on how your links are performing.
            </span>
          </div>
          <div className={`btn btn-primary rounded-pill ${styles.btn}`}>
            Get Started
          </div>
        </div>
      </div>

      {/* إدخال الرابط */}
      <div className={`mb-5 p-5 ${styles.input}`}>
        <div className="row justify-content-center">
          <input
            className={`w-75 p-3 col-6 ${error ? styles.errorPlaceholder : ''}`}
            type="text"
            placeholder="Shorten a link here..."
            value={link}
            onChange={(e) => setLink(e.target.value)} // تحديث قيمة الرابط
          />
          <button
            onClick={handleLink}
            className={`btn ms-3 ms-sm-0 col-12 col-sm-2 ${styles.btn} ${styles.send}`}
            >
            Shorten it!
          </button>
        </div>
        {error && (
          <span className="text-danger d-block mt-2">{error}</span>
        )}
      </div>

      {/* عرض الروابط المختصرة */}
      <div>
  {shortenedLinks.map((linkObj, index) => (
    <div
      key={index}
      className={`d-flex flex-column flex-sm-row justify-content-between align-items-sm-center mb-3 ${styles.links}`}
    >
      <div className={`d-flex flex-column flex-sm-row `}>
        <p className={`mb-1 mb-sm-0 ${styles.original}`}>
          <span className="text-warning-emphasis">Original:</span> {linkObj.long}
        </p>
        <p className={`mb-1 mb-sm-0 ms-0 ms-sm-4 ${styles.short}`}>
          <span className="text-success">Short:</span> {linkObj.short}
        </p>
      </div>
      <button
        className={`btn btn-secondary mt-2 mt-sm-0 ${styles.btn}`}
        onClick={() => copyToClipboard(linkObj.short)}
      >
        Copy
      </button>
    </div>
  ))}
</div>

    </div>
  );
};

export default Home;
