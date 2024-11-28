(function () {
    var application_root = __dirname,
        express = require('express'),
        path = require('path'),
        app = express();

    // Middleware setup
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(express.static(path.join(application_root, "public")));

    app.listen(process.env.PORT || 2424);
}).call(this);