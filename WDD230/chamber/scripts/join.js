const selector = document.getElementById('input-membership');

List = [
    ["Select a membership level first"],
    ["E-commer webinars","Salesforce Training"],
    ["NP Benefits","Social Media Ads","Monthly News Paper Ads"],
    ["NP + Bronze Benefits","Partners Discounts","Legal Advisory"],
    ["NP + Bronze + Silver Benefits","Weekly Online Ads","Weekly BTL campaigns"]
]

selector.addEventListener('click', function() {
    selector.addEventListener("change", () => {
        var value = parseInt(selector.value);
        document.querySelector('#benefits').innerHTML = `${List[value].map((b) => `<li>${b}`).join('')}`;
    });
});

