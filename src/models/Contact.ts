import { Category } from '../utils/enums/Contact';
import { v4 as uuid } from 'uuid';

class Contact {
    id: string;
    name: string;
    category: Category;
    email: string;
    phone: string;

    constructor(name: string, category: Category, email: string, phone: string) {
        this.id = uuid();
        this.name = name;
        this.category = category;
        this.email = email;
        this.phone = phone;
    }
}

export default Contact;
