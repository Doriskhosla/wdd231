export function saveLastTool(toolName) {
    localStorage.setItem("lastTool", toolName);
}

export function getLastTool() {
    return localStorage.getItem("lastTool");
}
