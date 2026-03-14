```html
<ion-datetime></ion-datetime>

<script>
  const datetime = document.querySelector('ion-datetime');
  datetime.isDateEnabled = (dateString) => {
    const date = new Date(dateString);
    const utcDay = date.getUTCDay();

    /**
     * 只有当日期不是
     * 周日或周六时才会启用
     */
    return utcDay !== 0 && utcDay !== 6;
  };
</script>
```