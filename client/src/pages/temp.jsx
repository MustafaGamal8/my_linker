import React, { useEffect, useState, lazy, Suspense } from 'react';
import { useParams } from 'react-router-dom';
import ProfileDataHandler from './../functions/ProfileDataHandler';
import { toast } from 'react-toastify';

const TemplateOne = lazy(() => import('../templates/template_one'));
const TemplateTwo = lazy(() => import('../templates/template_two'));
const TemplateThree = lazy(() => import('../templates/template_three/template_three'));
const TemplateFour = lazy(() => import('../templates/teamplate_four/teamplate_four'));
// Import other templates as needed

const Temp = () => {
  let { tempName, userId } = useParams();
  const [userDetails, setUserDetails] = useState({});
  const [dataFetched, setDataFetched] = useState(false);

  const fetchData = async () => {
    if (!userId || userId.length < 4) {
      toast.error("يرجي ادخال اسم المستخدم");
      return;
    }

    if (userId.includes("@")) {
      userId = userId.split("@")[0];
    }
    const data = await ProfileDataHandler(userId);
    setUserDetails(data);
    setDataFetched(true);
  };

  useEffect(() => {
    fetchData();
  }, [userId]);

  const templates = {
    one: TemplateOne,
    two: TemplateTwo,
    three: TemplateThree,
    four: TemplateFour,
  };

  const ChosenTemplate = templates[tempName] || TemplateOne;

  return (
    <Suspense fallback={<div>Loading...</div>}>
      {dataFetched && <ChosenTemplate userDetails={userDetails} />}
    </Suspense>
  );
};

export default Temp;
