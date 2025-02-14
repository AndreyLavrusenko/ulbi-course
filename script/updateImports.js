"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ts_morph_1 = require("ts-morph");
var project = new ts_morph_1.Project({});
project.addSourceFilesAtPaths("src/**/*.ts");
project.addSourceFilesAtPaths("src/**/*.tsx");
var files = project.getSourceFiles();
function isAbsolute(value) {
    var layers = ["app", "shared", "entities", "widget", "features", "pages"];
    return layers.some(function (layer) { return value.startsWith(layer); });
}
files.forEach(function (sourceFile) {
    var importDeclarations = sourceFile.getImportDeclarations();
    importDeclarations.forEach(function (importDeclarations) {
        var value = importDeclarations.getModuleSpecifierValue();
        if (isAbsolute(value)) {
            importDeclarations.setModuleSpecifier("@/".concat(value));
        }
    });
});
project.save();
