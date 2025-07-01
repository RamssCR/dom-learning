import './style.css'
import { addContainer, updateCounter } from './mutation'

const counter = document.querySelector('.container-count')
const button = document.querySelector('.add-container')
const container = document.querySelector('.dynamic-container')

updateCounter(container, counter)
button.addEventListener('click', () => addContainer(container))