import { useDispatch, useSelector } from 'react-redux';
import { ActionButtonDanger, ActionButtonSave, Field, MainContainer, Title } from '../../styles';
import { Category } from '../../utils/enums/Contact';
import { Form, Option, Options } from './styles';
import { useLocation, useNavigate } from 'react-router-dom';
import { FormEvent, useEffect, useState } from 'react';
import { save, edit } from '../../store/reducers/contacts';
import { v4 as uuid } from 'uuid';
import { RootReducer } from '../../store';

type Props = {
    contactId?: string;
};

const ContactForm = ({ contactId }: Props) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    const { items } = useSelector((state: RootReducer) => state.contacts);

    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [category, setCategory] = useState(Category.NO_CATEGORY);
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    useEffect(() => {
        if (location.pathname.includes('/new')) {
            setId(uuid());
        } else {
            const currentContact = items.filter(contact => contact.id === contactId);

            setId(currentContact[0].id);
            setName(currentContact[0].name);
            setCategory(currentContact[0].category);
            setEmail(currentContact[0].email);
            setPhone(currentContact[0].phone);
        }
    }, [contactId, items, location.pathname]);

    const saveContact = (e: FormEvent) => {
        e.preventDefault();

        if (location.pathname.includes('/new')) {
            dispatch(save({ id, name, category, email, phone }));
        } else {
            dispatch(edit({ id, name, category, email, phone }));
        }

        navigate('/');
    };

    const cancel = () => {
        navigate('/');
    };

    return (
        <MainContainer>
            <Title>Novo contato</Title>
            <Form onSubmit={saveContact}>
                <Field value={name} onChange={e => setName(e.target.value)} type="text" placeholder="Nome" />
                <Options>
                    <p>Categoria</p>
                    {Object.values(Category).map(item => (
                        <Option>
                            <input
                                key={category}
                                onChange={e => setCategory(e.target.value as Category)}
                                type="radio"
                                name="category"
                                id={item}
                                value={item}
                                defaultChecked={item === category}
                            />
                            <label htmlFor={item}>{item}</label>
                        </Option>
                    ))}
                </Options>
                <Field value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder="E-mail" />
                <Field value={phone} onChange={e => setPhone(e.target.value)} type="tel" placeholder="Phone" />
                <ActionButtonSave type="submit">Cadastrar</ActionButtonSave>
                {window.innerWidth <= 767 ? <ActionButtonDanger onClick={cancel}>Cancelar</ActionButtonDanger> : <></>}
            </Form>
        </MainContainer>
    );
};

export default ContactForm;
