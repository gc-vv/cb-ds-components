import type { Meta, StoryObj } from '@storybook/angular';
import { Component } from '@angular/core';
import { DS_COLORS, DS_TYPOGRAPHY } from '@cb/ds-components/tokens';

@Component({
  selector: 'app-tokens-doc',
  standalone: true,
  template: `
    <div style="font-family: var(--ds-font-family, 'Nunito', sans-serif); padding: 24px; max-width: 960px;">

      <!-- ===== TYPOGRAPHY ===== -->
      <h2 style="font-size:20px;font-weight:700;margin:0 0 24px;color:#1a1a1a;border-bottom:2px solid #e0e0e0;padding-bottom:8px;">
        Tipografia — Nunito
      </h2>

      <div style="display:grid;gap:8px;margin-bottom:40px;">
        <div *ngFor="let row of typographyRows" style="display:grid;grid-template-columns:180px 80px 80px 1fr;align-items:center;gap:16px;padding:10px 0;border-bottom:1px solid #f0f0f0;">
          <code style="font-size:11px;color:#6b6b6b;font-family:monospace;">{{ row.name }}</code>
          <span style="font-size:11px;color:#9e9e9e;">{{ row.size }}</span>
          <span style="font-size:11px;color:#9e9e9e;">w{{ row.weight }}</span>
          <span [style.font-size]="row.size" [style.font-weight]="row.weight" [style.font-family]="fontFamily" [style.letter-spacing]="letterSpacing">
            {{ row.sample }}
          </span>
        </div>
      </div>

      <!-- ===== ACTION COLORS ===== -->
      <h2 style="font-size:20px;font-weight:700;margin:0 0 24px;color:#1a1a1a;border-bottom:2px solid #e0e0e0;padding-bottom:8px;">
        Cores — Action
      </h2>
      <div style="display:flex;flex-wrap:wrap;gap:12px;margin-bottom:40px;">
        <div *ngFor="let swatch of actionSwatches" style="display:flex;flex-direction:column;align-items:center;gap:6px;">
          <div [style.background]="swatch.value" style="width:64px;height:64px;border-radius:12px;border:1px solid rgba(0,0,0,0.06);"></div>
          <code style="font-size:10px;color:#6b6b6b;font-family:monospace;">{{ swatch.name }}</code>
          <code style="font-size:10px;color:#9e9e9e;font-family:monospace;">{{ swatch.value }}</code>
        </div>
      </div>

      <!-- ===== SURFACE COLORS ===== -->
      <h2 style="font-size:20px;font-weight:700;margin:0 0 24px;color:#1a1a1a;border-bottom:2px solid #e0e0e0;padding-bottom:8px;">
        Cores — Background / Surface
      </h2>
      <div style="display:flex;flex-wrap:wrap;gap:12px;margin-bottom:40px;">
        <div *ngFor="let swatch of surfaceSwatches" style="display:flex;flex-direction:column;align-items:center;gap:6px;">
          <div [style.background]="swatch.value" style="width:64px;height:64px;border-radius:12px;border:1px solid rgba(0,0,0,0.06);"></div>
          <code style="font-size:10px;color:#6b6b6b;font-family:monospace;text-align:center;max-width:80px;">{{ swatch.name }}</code>
          <code style="font-size:10px;color:#9e9e9e;font-family:monospace;">{{ swatch.value }}</code>
        </div>
      </div>

      <!-- ===== SEMANTIC COLORS ===== -->
      <h2 style="font-size:20px;font-weight:700;margin:0 0 24px;color:#1a1a1a;border-bottom:2px solid #e0e0e0;padding-bottom:8px;">
        Cores — Semânticas (Text / Border)
      </h2>
      <div style="display:flex;flex-wrap:wrap;gap:12px;margin-bottom:40px;">
        <div *ngFor="let swatch of semanticSwatches" style="display:flex;flex-direction:column;align-items:center;gap:6px;">
          <div [style.background]="swatch.value" style="width:64px;height:64px;border-radius:12px;border:1px solid rgba(0,0,0,0.06);"></div>
          <code style="font-size:10px;color:#6b6b6b;font-family:monospace;text-align:center;max-width:80px;">{{ swatch.name }}</code>
          <code style="font-size:10px;color:#9e9e9e;font-family:monospace;">{{ swatch.value }}</code>
        </div>
      </div>

      <!-- ===== DECORATIVE PALETTE ===== -->
      <h2 style="font-size:20px;font-weight:700;margin:0 0 24px;color:#1a1a1a;border-bottom:2px solid #e0e0e0;padding-bottom:8px;">
        Cores — Decorativas (1–12)
      </h2>
      <div style="display:flex;flex-wrap:wrap;gap:12px;margin-bottom:40px;">
        <div *ngFor="let dec of decorativeSwatches" style="display:flex;flex-direction:column;align-items:center;gap:4px;width:80px;">
          <div style="display:flex;gap:2px;">
            <div [style.background]="dec.surface" style="width:28px;height:40px;border-radius:8px 0 0 8px;border:1px solid rgba(0,0,0,0.06);"></div>
            <div [style.background]="dec.icon" style="width:14px;height:40px;border:1px solid rgba(0,0,0,0.06);"></div>
            <div [style.background]="dec.text" style="width:28px;height:40px;border-radius:0 8px 8px 0;border:1px solid rgba(0,0,0,0.06);"></div>
          </div>
          <code style="font-size:10px;color:#6b6b6b;font-family:monospace;">{{ dec.label }}</code>
        </div>
      </div>

    </div>
  `,
})
export class TokensDocComponent {
  readonly fontFamily = DS_TYPOGRAPHY.fontFamily;
  readonly letterSpacing = DS_TYPOGRAPHY.letterSpacing;

  readonly typographyRows = [
    ...Object.entries(DS_TYPOGRAPHY.heading).map(([k, v]) => ({ name: `heading.${k}`, size: v.size, weight: v.weight, sample: `Heading ${k.toUpperCase()} — Nunito Bold` })),
    ...Object.entries(DS_TYPOGRAPHY.subtitle).map(([k, v]) => ({ name: `subtitle.${k}`, size: v.size, weight: v.weight, sample: `Subtitle ${k.toUpperCase()} — Nunito SemiBold` })),
    { name: 'body.b2', size: DS_TYPOGRAPHY.body.b2.size, weight: DS_TYPOGRAPHY.body.b2.weight, sample: 'Body 2 — texto padrão de interface' },
    { name: 'body.b2Strong', size: DS_TYPOGRAPHY.body.b2Strong.size, weight: DS_TYPOGRAPHY.body.b2Strong.weight, sample: 'Body 2 Strong — texto em negrito' },
    { name: 'body.b3', size: DS_TYPOGRAPHY.body.b3.size, weight: DS_TYPOGRAPHY.body.b3.weight, sample: 'Body 3 — texto de maior destaque' },
  ];

  readonly actionSwatches = [
    { name: 'action-primary', value: DS_COLORS.action.primary },
    { name: 'action-primary-hov', value: DS_COLORS.action.primaryHovered },
    { name: 'action-primary-prs', value: DS_COLORS.action.primaryPressed },
    { name: 'action-secondary', value: DS_COLORS.action.secondary },
    { name: 'action-sec-hov', value: DS_COLORS.action.secondaryHovered },
    { name: 'action-sec-prs', value: DS_COLORS.action.secondaryPressed },
    { name: 'action-critical', value: DS_COLORS.action.critical },
    { name: 'action-crit-hov', value: DS_COLORS.action.criticalHovered },
    { name: 'action-conversion', value: DS_COLORS.action.conversion },
    { name: 'focused', value: DS_COLORS.focused },
  ];

  readonly surfaceSwatches = [
    { name: 'bg-main', value: DS_COLORS.background.main },
    { name: 'bg-surface', value: DS_COLORS.background.surface.main },
    { name: 'bg-surface-above', value: DS_COLORS.background.surface.above },
    { name: 'bg-surface-sel', value: DS_COLORS.background.surfaceSelected.default },
    { name: 'bg-surface-warn', value: DS_COLORS.background.surfaceWarning.default },
    { name: 'bg-surface-crit', value: DS_COLORS.background.surfaceCritical.default },
    { name: 'bg-surface-succ', value: DS_COLORS.background.surfaceSuccess.default },
    { name: 'bg-surface-info', value: DS_COLORS.background.surfaceInformation.default },
    { name: 'bg-surface-hl', value: DS_COLORS.background.surfaceHighlight.default },
    { name: 'bg-surface-sys', value: DS_COLORS.background.surfaceSystem.default },
  ];

  readonly semanticSwatches = [
    { name: 'text', value: DS_COLORS.text.main },
    { name: 'text-above', value: DS_COLORS.text.above },
    { name: 'text-critical', value: DS_COLORS.text.critical },
    { name: 'text-warning', value: DS_COLORS.text.warning },
    { name: 'text-success', value: DS_COLORS.text.success },
    { name: 'text-info', value: DS_COLORS.text.information },
    { name: 'text-highlight', value: DS_COLORS.text.highlight },
    { name: 'border', value: DS_COLORS.border.main },
    { name: 'border-crit', value: DS_COLORS.border.critical },
    { name: 'border-succ', value: DS_COLORS.border.success },
    { name: 'border-info', value: DS_COLORS.border.information },
    { name: 'border-warn', value: DS_COLORS.border.warning },
    { name: 'shadow', value: DS_COLORS.shadow.main },
  ];

  readonly decorativeSwatches = [
    { label: 'one', ...DS_COLORS.decorative.one },
    { label: 'two', ...DS_COLORS.decorative.two },
    { label: 'three', ...DS_COLORS.decorative.three },
    { label: 'four', ...DS_COLORS.decorative.four },
    { label: 'five', ...DS_COLORS.decorative.five },
    { label: 'six', ...DS_COLORS.decorative.six },
    { label: 'seven', ...DS_COLORS.decorative.seven },
    { label: 'eight', ...DS_COLORS.decorative.eight },
    { label: 'nine', ...DS_COLORS.decorative.nine },
    { label: 'ten', ...DS_COLORS.decorative.ten },
    { label: 'eleven', ...DS_COLORS.decorative.eleven },
    { label: 'twelve', ...DS_COLORS.decorative.twelve },
  ];
}

const meta: Meta<TokensDocComponent> = {
  title: 'Design System/Tokens',
  component: TokensDocComponent,
  tags: ['autodocs'],
  parameters: {
    controls: { disable: true },
    actions: { disable: true },
  },
};

export default meta;

type Story = StoryObj<TokensDocComponent>;

export const Cores: Story = {};
