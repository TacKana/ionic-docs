```html
<ion-datetime></ion-datetime>

<script>
  const datetime = document.querySelector('ion-datetime');
  datetime.isDateEnabled = (dateString) => {
    const date = new Date(dateString);
    const utcDay = date.getUTCDay();

    /**
     * 如果日期不是周日或周六
     * 则启用该日期
     */
    return utcDay !== 0 && utcDay !== 6;
  };
</script>
```