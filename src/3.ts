/*
 * #3
 *
 * Задача: Розробити функцію getOrderStatus, яка приймає статус замовлення як параметр і повертає рядок з описом статусу.
 *
 * Мета: Створення функції, здатної ідентифікувати статус замовлення і надавати користувачеві зрозуміле пояснення
 * щодо поточного стану замовлення.
 *
 * Вимоги до реалізації:
 * 1. У коді має бути присутній enum OrderStatus з необхідними статусами.
 * 2. enum OrderStatus повинен мати статуси: 'Pending', 'Shipped', 'Delivered', 'Cancelled'.
 * 3. Функція має використовувати enum OrderStatus для визначення можливих статусів замовлення.
 * 4. Функція має приймати один параметр типу OrderStatus і повертати рядок з описом статусу.
 * 5. Функція повинна правильно обробити кожен статус замовлення, повертаючи відповідне повідомлення:
 * -  'Pending' -> 'Замовлення очікує на обробку',
 * -  'Shipped' -> 'Замовлення було відправлено',
 * -  'Delivered' -> 'Замовлення доставлено',
 * -  'Cancelled' -> 'Замовлення скасовано'
 * -  прокинути помилку з текстом 'Невідомий статус замовлення' в будь-якому іншому випадку.
 * 6. Параметри функції та її тип повернення мають бути явно типізовані.
 *
 */

enum OrderStatus {
    Pending = 'Замовлення очікує на обробку',
    Shipped = 'Замовлення було відправлено',
    Delivered = 'Замовлення доставлено',
    Cancelled = 'Замовлення скасовано'
}

function getOrderStatus(status: OrderStatus): string {
    if (!status) {
        throw new Error('Невідомий статус замовлення')
    }
    return status
}

try {
    console.log(getOrderStatus(OrderStatus.Pending))
    console.log(getOrderStatus(OrderStatus.Shipped))
    console.log(getOrderStatus(OrderStatus.Delivered))
    console.log(getOrderStatus(OrderStatus.Cancelled))
}
catch (error) {
    console.log(error)
}