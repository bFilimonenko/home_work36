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
    Pending,
    Shipped,
    Delivered,
    Cancelled,
}

const orderStatusesDescription: Record<OrderStatus, string> = {
    [OrderStatus.Pending]: 'Замовлення очікує на обробку',
    [OrderStatus.Shipped]: 'Замовлення було відправлено',
    [OrderStatus.Delivered]: 'Замовлення доставлено',
    [OrderStatus.Cancelled]: 'Замовлення скасовано',
}

function getOrderStatusDescription(status: OrderStatus): string {
    const description = orderStatusesDescription[status]

    if (!description) {
        throw Error('Невідомий статус замовлення')
    }

    return description
}

try {
    console.log(getOrderStatusDescription(OrderStatus.Pending))
    console.log(getOrderStatusDescription(OrderStatus.Shipped))
    console.log(getOrderStatusDescription(OrderStatus.Delivered))
    console.log(getOrderStatusDescription(OrderStatus.Cancelled))
} catch (error) {
    console.log(error)
}