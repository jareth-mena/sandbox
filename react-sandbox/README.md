# Tools

- [tweackcn (shadcn online editor)](https://tweakcn.com/editor/theme)
- [Lucide (shadcn icons)](https://lucide.dev/icons/)
- [Install shadcn](https://ui.shadcn.com/docs/installation/vite)

---
# Tips and Tricks

Accessibility for dropdown triggers
```typescript jsx
<DropdownMenu>
    {/* Required to prevent hydration errors */}
    <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
            <SquareMenu/>
            {/*Accessibility Option*/}
            <span className='sr-only'>Open Menu</span>
        </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent sideOffset={10}>
        <DropdownMenuItem>
            Menu Item 1
        </DropdownMenuItem>
        <DropdownMenuItem>
            Menu Item 2
        </DropdownMenuItem>
        <DropdownMenuItem>
            Menu Item 3
        </DropdownMenuItem>
    </DropdownMenuContent>
</DropdownMenu>
```
