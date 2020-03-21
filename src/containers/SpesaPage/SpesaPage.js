import React from "react";
import DefaultLayout from "../../layouts/DefaultLayout/DefaultLayout";
import './SpesaPage.scss';
import Header from "../../components/Header/Header";

const SpesaPage = () => {
  return (
      <DefaultLayout>
          <Header
              withBackground={false}
              subtitle={`Ecco la tua lista della spesa`}
          />
          <div className={"SpesaPage"}>
              Spesa Page
          </div>
      </DefaultLayout>
  );
};

export default SpesaPage;
