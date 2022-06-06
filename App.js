"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.App = void 0;
var express = require("express");
var logger = require("morgan");
var bodyParser = require("body-parser");
var session = require("express-session");
var cookieParser = require("cookie-parser");
var ItemModel_1 = require("./model/ItemModel");
var CategoryModel_1 = require("./model/CategoryModel");
var UserModel_1 = require("./model/UserModel");
var crypto = require("crypto");
var GooglePassport_1 = require("./GooglePassport");
var passport = require("passport");
// Creates and configures an ExpressJS web server.
var App = /** @class */ (function () {
    //Run configuration methods on the Express instance.
    function App() {
        this.googlePassportObj = new GooglePassport_1["default"]();
        this.expressApp = express();
        this.middleware();
        this.routes();
        this.idGenerator = 100;
        this.Items = new ItemModel_1.ItemModel();
        this.Category = new CategoryModel_1.CategoryModel();
        this.User = new UserModel_1.UserModel();
    }
    // Configure Express middleware.
    App.prototype.middleware = function () {
        this.expressApp.use(logger('dev'));
        this.expressApp.use(bodyParser.json());
        this.expressApp.use(bodyParser.urlencoded({ extended: false }));
        this.expressApp.use(session({ secret: 'keyboard cat' }));
        this.expressApp.use(cookieParser());
        this.expressApp.use(passport.initialize());
        this.expressApp.use(passport.session());
    };
    App.prototype.validateAuth = function (req, res, next) {
        if (req.isAuthenticated()) {
            console.log("user is authenticated. username: " + req.user.username);
            return next();
        }
        console.log("user is not authenticated");
        res.redirect("/");
    };
    // Configure API endpoints.
    App.prototype.routes = function () {
        var _this = this;
        var router = express.Router();
        router.get("/auth/google/", passport.authenticate("google", { scope: ["profile"] }));
        router.get('/auth/google/callback/', passport.authenticate('google', { failureRedirect: '/' }), function (req, res) {
            console.log("successfully authenticated user and returned to callback page.");
            console.log("redirecting to /#/items");
            res.redirect('/#/items');
        });
        // Users
        router.post("/app/users/", function (req, res) {
            _this.User.createUser(res, req.body);
        });
        router.get("/app/users/:userId/", function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.User.getUser(res, { userId: req.params.userId });
                return [2 /*return*/];
            });
        }); });
        router.put("/app/users/", function (req, res) {
            _this.User.updateUser(res, req.body);
        });
        router["delete"]("/app/users/", function (req, res) {
            _this.User.deleteUser(res, req.body);
        });
        // Items
        //router.get("/app/Items/", this.validateAuth, (req,res) => {
        router.get("/app/Items/", function (req, res) {
            console.log('Query All items');
            res.header("Acces-Control-Allow-Origin", "http://localhost:4200");
            _this.Items.retrieveAllItems(res);
        });
        router.get("/app/Items/:item_id", function (req, res) {
            var id = req.params.item_id;
            console.log("Query single item with id:" + id);
            res.header("Acces-Control-Allow-Origin", "http://localhost:4200");
            _this.Items.retrieveOneItem(res, { item_id: id });
        });
        router.get("/app/Items/Category/:category_id", function (req, res) {
            var id = req.params.category_id;
            console.log("Query All items from a unique category_id: " + id);
            res.header("Acces-Control-Allow-Origin", "http://localhost:4200");
            _this.Items.retrieveAllItemsfromUniqueCategory(res, { category_id: id });
        });
        router.get("/app/standings/", function (req, res) {
            console.log('Query Top 10 Most voted');
            res.header("Acces-Control-Allow-Origin", "http://localhost:4200");
            _this.Items.retrieve10mostvoted(res);
        });
        router.get("/app/randomQuestion/", function (req, res) {
            console.log('Query A random question');
            res.header("Acces-Control-Allow-Origin", "http://localhost:4200");
            _this.Items.retrieveRandomQuestion(res);
        });
        router.get("/app/dailyQuestion/", function (req, res) {
            console.log('Query A daily question');
            res.header("Acces-Control-Allow-Origin", "http://localhost:4200");
            _this.Items.retriveDailyQuestion(res);
        });
        router.post("/app/Items/", function (req, res) {
            var id = crypto.randomBytes(16).toString("hex");
            res.header("Acces-Control-Allow-Origin", "http://localhost:4200");
            console.log(req.body);
            var jsonObj = req.body;
            _this.Items.model.create([jsonObj], function (err) {
                if (err) {
                    console.log('object creation failed');
                }
            });
            res.send('{"id":"' + id + '"}');
        });
        router.get("/app/categories/", function (req, res) {
            console.log('Query All categories');
            res.header("Acces-Control-Allow-Origin", "http://localhost:4200");
            _this.Category.retrieveAllCategories(res);
        });
        router.put("/app/Items/vote/:item_id", function (req, res) {
            var id = req.params.item_id;
            console.log("Update a single item with id:" + id);
            res.header("Acces-Control-Allow-Origin", "http://localhost:4200");
            _this.Items.updateVote(res, id);
        });
        var cors = require('cors');
        this.expressApp.use(cors({
            origin: '*',
            methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH']
        }));
        this.expressApp.use('/', router);
        this.expressApp.use('/app/json/', express.static(__dirname + '/app/json'));
        this.expressApp.use('/images', express.static(__dirname + '/img'));
        this.expressApp.use('/', express.static(__dirname + '/angularDist'));
    };
    return App;
}());
exports.App = App;
