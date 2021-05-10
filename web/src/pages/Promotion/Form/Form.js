import PromotionForm from "components/Promotion/Form/Form";
import UIContainer from "components/UI/Container/Container";
import React from "react";
import { useParams } from "react-router-dom";

const PagesPromotinForm = () => {
  const { id } = useParams();
  return (
    <div>
      <UIContainer>
        <PromotionForm />
      </UIContainer>
    </div>
  );
};

export default PagesPromotinForm;
