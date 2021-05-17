import * as yup from 'yup';

export default yup.object().shape({

    title: yup.string().required('CAMPO OBRIGATORIO CARALHO'),
    url : yup.string().url('url deve ser valida').required('CAMPO OBRIGATORIO CARALHO'),
    imageUrl : yup.string().url().required('CAMPO OBRIGATORIO CARALHO'),
    price : yup.number().required('CAMPO OBRIGATORIO CARALHO'),

});

