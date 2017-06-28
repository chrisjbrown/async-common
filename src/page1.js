export default function test() {
    import('./async1').then(async1, function() {
        async1.default();
    });

    import('./async2').then(async2, function() {
        async2.default();
    });

    import('./async3').then(async3, function() {
        async3.default();
    });
}
