export const Cloud = () => {
  return (
    <>
      <section className="cloud">
        <div className="cloud__info">
          <h2 className="title cloud__title">
            All-In-One <span>Cloud Software.</span>
          </h2>
          <div className="desc cloud__desc">
            Skilline is one powerful online software suite that combines all the
            tools needed to run a successful school or office.
          </div>
        </div>

        <div className="cloud__list">
          <div className="cloud-item">
            <div className="cloud-item__img">
              <img src="/assets/Cloud/icon1.png" alt="" />
            </div>
            <div className="cloud-item__title">
              Online Billing, Invoicing, & Contracts
            </div>
            <div className="cloud-item__desc">
              Simple and secure control of your organization’s financial and
              legal transactions. Send customized invoices and contracts
            </div>
          </div>

          <div className="cloud-item">
            <div className="cloud-item__img">
              <img src="/assets/Cloud/icon2.png" alt="" />
            </div>
            <div className="cloud-item__title">
              Easy Scheduling & Attendance Tracking
            </div>
            <div className="cloud-item__desc">
              Schedule and reserve classrooms at one campus or multiple
              campuses. Keep detailed records of student attendance
            </div>
          </div>

          <div className="cloud-item">
            <div className="cloud-item__img">
              <img src="/assets/Cloud/icon3.png" alt="" />
            </div>
            <div className="cloud-item__title">Customer Tracking</div>
            <div className="cloud-item__desc">
              Automate and track emails to individuals or groups. Skilline’s
              built-in system helps organize your organization
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
