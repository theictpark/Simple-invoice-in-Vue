import { reactive } from "vue";
export const invoice = reactive({
    sender: '',
    billTo: '',
    shipTo: '',
    invoiceNumber: '',
    date: '',
    dueDate: '',
    additionalNote: '',
    items: [{
        description: '',
        quantity: '',
        rate: '',
        amount: '',    
    }],
    notes: '',    
    terms: '',
    subtotal: '',
    tax: '',
    total: '',
});