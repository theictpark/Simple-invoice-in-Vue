<script setup>
import { invoice } from "./data/invoice";
import {invoice1, invoice2} from "./data/data";

function addMoreItem() {
    invoice.items.push({
        description: '',
        quantity: '',
        rate: '',
        amount: '',
    })
}

function deleteItem(index) { 
    if (invoice.items.length > 1) { 
        invoice.items.splice(index, 1); 
    }
}

function getSubtotal() {
    let subTotal = 0;
    invoice.items.forEach(item => {
        subTotal += item.amount;
    });
    invoice.subtotal = subTotal;
    return subTotal;
}

function getTotal() {
    let total = 0;
    total = invoice.subtotal + (invoice.subtotal * (invoice.tax / 100));
    invoice.total = total;
    return total;
}
</script>

<template>
<section class="mx-auto container bg-white border border-gray-400 min-h-screen p-12">
        <div class="flex justify-between">
            <div class="flex flex-col space-y-5 w-1/2s">
                <div class=" ">
                    <img class="w-40" src="https://www.shutterstock.com/image-vector/invoice-typographic-stamp-sign-badge-600w-1027820257.jpg" alt="">
                </div>
                <p class="mt-5">
                    Sender
                </p>
                <textarea v-model="invoice.sender" name="" id="" cols="30" rows="2"></textarea>
                <div class="flex space-x-2">
                    <div class="flex flex-col">
                        <span>Bill to</span>
                        <textarea v-model="invoice.billTo" name="" id="" cols="30" rows="2"></textarea>
                    </div>
                    <div class="flex flex-col">
                        <span>Ship to</span>
                        <textarea v-model="invoice.shipTo" name="" id="" cols="30" rows="2"></textarea>
                    </div>
                </div>
            </div>
            <div class="flex flex-col w-1/2 items-end">
                <h1 class="mt-12 text-4xl uppercase text-right mb-5">Invoice</h1>
                <input v-model="invoice.invoiceNumber" class="w-[200px] text-right" type="text" placeholder="Invoice Number">
                <div class="mt-10 flex-y-5 text-right space-y-3 w-full">
                    <p>
                        <span>Date</span>
                        <input v-model="invoice.date" class="ml-2 w-[200px] ">
                    </p>
                    <p>
                        <span>Due Date</span>
                        <input v-model="invoice.dueDate" class="ml-2 w-[200px]">
                    </p>
                    <p>
                        <span>Additional Note</span>
                        <input v-model="invoice.additionalNote" class="ml-2 w-[200px]" type="text">
                    </p>
                </div>
            </div>
        </div>
        <div class="mt-20">
            <table class="table-auto w-full">
                <tr class="bg-gray-800 text-left text-white">
                    <th class="p-2 pl-5 w-1/2">Item</th>
                    <th class="p-2">Quantity</th>
                    <th class="p-2">Rate</th>
                    <th class="p-2 w-[200px] text-right pr-5">Amount</th>
                </tr>
                <tr v-for="(item, index) in invoice.items" :key="index" >
                    <td class="py-1" @dblclick="deleteItem(index)">
                      <input v-model="item.description" class="w-full pl-5" type="text" placeholder="Description" />
                    </td>
                    <td class="">
                      <input v-model="item.quantity" class="w-full" type="number" placeholder="Quantity" />
                    </td>
                    <td class="">
                      <input v-model="item.rate" class="w-full" type="number" placeholder="Rate">
                    </td>
                    <td class="py-1 pr-5 text-right text-gray-800">
                      <span class="text-2xl">৳</span> {{item.amount = item.quantity * item.rate}}
                      <span @click="deleteItem(index)" class="mt-5 bg-red-600 hover:bg-red-700 text-white font-bold py-1 px-4 rounded">x</span>
                    </td>
                </tr>
            </table>
            <button @click="addMoreItem()" class="mt-5 bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                Add More
            </button>
            <button @click="Object.assign(invoice, invoice1)" class="ml-2 mt-5 bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                Load Invoice 1
            </button>
            <button @click="Object.assign(invoice, invoice2)" class="ml-2 mt-5 bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                Load Invoice 2
            </button>
            <p class="mt-10 text-gray-800 text-2xl">
              {{ invoice }}
            </p>
        </div>
        <div class="mt-[200px]">
            <div class="flex justify-between">
                <div class="flex flex-col space-y-5 w-1/2">
                    <span>Notes</span>
                    <textarea v-model="invoice.notes" name="" id="" cols="30" rows="2"></textarea>
                    <span>Terms</span>
                    <textarea v-model="invoice.terms" name="" id="" cols="30" rows="2"></textarea>
                </div>
                <div class="flex flex-col w-1/2 items-end">
                    <div class="mt-10 flex-y-5 text-right space-y-3 w-full">
                        <p>
                            <span>Subtotal</span>
                            <input :value="getSubtotal()" readonly class="focus:ring-0 focus:ring-offset-0 text-right ml-2 pr-4 w-[200px] border-0" placeholder="Subtotal">
                        </p>
                        <p>
                            <span>Tax</span>
                            <input v-model="invoice.tax" type="number" class="tax text-right w-[200px] ml-2">
                        </p>
                        <p>
                            <span>Total</span>
                            <input :value="getTotal()" readonly class="focus:ring-0 focus:ring-offset-0 text-right ml-2 pr-4 w-[200px] border-0" placeholder="Total">
                        </p>
                    </div>
                </div>
            </div>
        </div>

    </section>
</template>

<style scoped>
        input,
        textarea {
            border: 1px solid #ddd !important;
            padding: 5px;
            border-radius: 5px;
        }

        input.tax::-webkit-outer-spin-button,
        input.tax::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
        }
</style>
