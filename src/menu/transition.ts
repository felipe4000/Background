/*
 * Copyright (C) 2025 Katsute <https://github.com/Katsute>
 *
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation; either version 2 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License along
 * with this program; if not, write to the Free Software Foundation, Inc.,
 * 51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA.
 */

import { UI, get, updateFromLabel } from "../extension/config";
import { getConfigurationProperty } from "../extension/package";

import { CommandQuickPickItem, quickPickItem, showQuickPick } from "../lib/vscode";

import { backgroundMenu, title } from "./menu";

const prop: any = getConfigurationProperty("backgroundTransitionEffect");

const handle: (item: CommandQuickPickItem) => void = (item: CommandQuickPickItem) =>
    updateFromLabel("backgroundTransitionEffect", item)
        .then(() => backgroundMenu(item.ui!));

export const show: (ui: UI) => void = (ui: UI) => {
    const current: string = get("backgroundTransitionEffect") as string;

    showQuickPick([
        quickPickItem({ label: prop.enum![0], description: prop.enumDescriptions![0], handle, ui }, current),
        quickPickItem({ label: prop.enum![1], description: prop.enumDescriptions![1], handle, ui }, current)
    ], {
        title: title("Transition", ui),
        matchOnDescription: true,
        placeHolder: "Transition effect"
    });
};
